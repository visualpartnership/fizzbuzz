const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

require("dotenv").config();

if(!process.env.TOKEN) {
    throw new Error("No token found");
}

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg) => {
    const chatId = msg.chat.id;
    const resp = "🚀 Welcome explorer! 🚀";

    bot.sendMessage(chatId, resp);
});


bot.onText(/\/fizzbuzz (.+)/, (number) => {
    const chatId = number.chat.id;
    const numberForTesting = parseInt(number.text.substring(10));

    if(!isNaN(numberForTesting)) {
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberForTesting);
        const botResponse = `Your number is: ${numberForTesting}. Validation: ${fizzbuzzTrick}`;

        bot.sendMessage(chatId, botResponse);
    } else {
        bot.sendMessage(chatId, "Invalid input. It must be a number.");
    }
});

bot.onText(/\/mission (.+)/, (mission) => {
    const chatId = mission.chat.id;
    const missionForTesting = mission.text.substring(9);
    const explorers = ExplorerController.getExplorersByMission(missionForTesting);

    if (missionForTesting === "node") {
        const botResponse = JSON.stringify(explorers);

        bot.sendMessage(chatId, botResponse);
    } else if (missionForTesting === "java") {
        const botResponse = JSON.stringify(explorers);

        bot.sendMessage(chatId, botResponse);
    } else {
        bot.sendMessage(chatId, "Invalid input. It must be node or java.");
    }
});