const ExplorerService = require ("../services/ExplorerService"),
    FizzbuzzService = require ("../services/FizzbuzzService"),
    Reader = require ("../utils/reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile ("explorers.json");
        return ExplorerService.filterByMission (explorers, mission);
    }

    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber (score);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile ("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission (explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile ("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission (explorers, mission);
    }
}

module.exports = ExplorerController;
