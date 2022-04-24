const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/ExplorerService')
const FizzbuzzService = require('./lib/services/FizzbuzzService')

const explorers = Reader.readJsonFile('explorers.json')

const explorersInNode = ExplorerService.filterByMission(explorers, "node")
console.log(explorersInNode)
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))

const explorer = {score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer))
