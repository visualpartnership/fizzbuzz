const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/ExplorerService')
const FizzbuzzService = require('./lib/services/FizzbuzzService')

const explorers = Reader.readJsonFile('explorers.json')

const explorersInNode = ExplorerService.filterByMission(explorers, "node")
const explorersInNodeAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
const explorersWithFizzBuzzTrick= explorers.map((exp) => FizzbuzzService.applyValidationInExplorer(exp))
