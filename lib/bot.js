const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

const token = "";
const bot = new TelegramBot(token, {polling: true});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const message = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(message);
        const responseBot = `Tu número es: ${message}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        const stringNamesExplorers = ExplorerController.botExplorersByMission(message);
        if (stringNamesExplorers === ""){const responseBot = `No hay explorers con misión ${message}`}
        const responseBot = `Tu número es: ${message}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, "Envía un número válido");
    }

});