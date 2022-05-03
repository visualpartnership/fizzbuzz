const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static applyFizzbuzzBotResponse(number){
        const resultString = `Tu número es: ${number}. Validación: ${ExplorerController.applyFizzbuzz(number)}`;
        return resultString;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByStack(explorers,stack);
    }

    static botResponseUsernamesInMission(mission){
        const usernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
        const resultString = `Los usernames de los explorers en la mision ${mission} son: ${usernamesInMission.join(', ')}`;
        return resultString;
    }
}

module.exports = ExplorerController;
