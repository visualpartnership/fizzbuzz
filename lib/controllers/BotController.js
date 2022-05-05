const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./ExplorerController");
require("dotenv").config();

class BotController {
    static listener() {
        // eslint-disable-next-line no-undef
        this.bot = new TelegramBot(process.env.TOKEN, { polling: true });

        this.bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
        
            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"
        
            // send back the matched "whatever" to the chat
            this.bot.sendMessage(chatId, resp);
        });

        this.bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                this.bot.sendMessage(chatId, responseBot);
            } else {
                if(msg.text === "java" || msg.text === "node"){
                    const explorers = ExplorerController.getExplorersByMission(msg.text);
                    const mapExplorers = explorers.map((explorer) => {
                        return `Explorer ${explorer.name} con stacks (${explorer.stacks.join(", ")})`;
                    });
                    const responseBot = `Explorers de ${msg.text}: ${mapExplorers.join(", ")}`;
                    this.bot.sendMessage(chatId, responseBot);
                } else {
                    this.bot.sendMessage(chatId, "Envía un número válido");
                }
            }
        
        });
    }
}

module.exports = BotController;