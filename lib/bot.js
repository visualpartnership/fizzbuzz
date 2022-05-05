const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

const token = "";
const bot = new TelegramBot(token, {polling: true});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    if(!isNaN(parseInt(message))){
        const respuesta = ExplorerController.botFizzBuzz(message);
        bot.sendMessage(chatId, respuesta);
    } else {
        const respuesta = ExplorerController.botExplorersByMission(message.toLowerCase());
        bot.sendMessage(chatId, respuesta);
    }
});