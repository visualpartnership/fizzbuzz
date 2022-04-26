const Reader = require('./../utils/Reader');
const ExplorerService = require('./../services/ExplorerService');
const FizzbuzzService = require('./../services/FizzbuzzService');

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNode= ExplorerService.filterByMission(explorers, mission);
        return explorersInNode
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNodeToGetUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersInNodeToGetUsernames
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersamount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersamount
    }
    static applyValidationInNumber(number){
        const validation = FizzbuzzService.applyValidationInNumber(number);
        return validation
    }
    static filterByStact(stack){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNode = ExplorerService.filterByStact(explorers, "javascript")
        return explorersInNode
    }
}
module.exports = ExplorerController