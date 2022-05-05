const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5030635758:AAFHgY6kOEO3XUVRZj1ID_m6jS-QmnH8PZM";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});


// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    const mission = msg.text;

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    }     
    else if(mission.toLowerCase() ==='node' || mission.toLowerCase() === 'java') {
        
        const explorersInMission = ExplorerController.getExplorersUsernamesByMission(mission.toLowerCase());
        const responseBot = `Tu misión es: ${mission}. Los explorers en esa misión son: ${JSON.stringify(explorersInMission)}`;
        bot.sendMessage(chatId, responseBot);
    } 
    else {
        bot.sendMessage(chatId, "Envía un número válido o escribe la palabra Node o Java para recibir la lista de explorers en esa misión");
    }
    

});