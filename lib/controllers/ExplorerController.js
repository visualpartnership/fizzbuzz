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

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getExplorersWithStack(stackName){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersWithGivenStack = ExplorerService.filterByStack(explorers, stackName);
        return explorersWithGivenStack;
    }
    static botExplorersByMission(mision){
        const listaExplorersMision = ExplorerService.botExplorersByMission(mision);
        return listaExplorersMision;
    }
}

module.exports = ExplorerController;
