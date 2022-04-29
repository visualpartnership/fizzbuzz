const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerController{

    /**
     * 
     * @param {string} mission 
     * @returns Explorers Filter By MIssion
     */
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    /**
     * 
     * @param {string} score 
     * @returns validation number with fizzbuzz
     */
    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    /**
     * 
     * @param {string} mission 
     * @returns Explorer's username by mission
     */
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    /**
     * 
     * @param {string} mission 
     * @returns Explorers Amount filter by mission
     */
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    /**
     * 
     * @param {string} stack 
     * @returns Explorer sFilter By Stack
     */
    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByStack(explorers, stack);
    }
}

module.exports = ExplorerController;
