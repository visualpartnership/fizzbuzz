require('dotenv').config()

const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");


if(!process.env.TOKEN){
    throw new Error('No hay configuración Token')
  }


// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "java"
bot.onText(/java/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = ExplorerController.botResponseUsernamesInMission(match[0]); // the captured "java"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Matches "node"
bot.onText(/node/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = ExplorerController.botResponseUsernamesInMission(match[0]); // the captured "node"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const responseBot = ExplorerController.applyFizzbuzzBotResponse(numberToApplyFb);
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});