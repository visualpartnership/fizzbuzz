const ExplorerService = require("../services/ExplorerService")
const Reader = require("../utils/reader")

class ExplorerController{
  static getExplorersByMission(mission){
    const explorers = Reader.readJsonFile("explorers.json")
    return ExplorerService.filterByMission(explorers, mission)
  }
}

module.exports = ExplorerController
