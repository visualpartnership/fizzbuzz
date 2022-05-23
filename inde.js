const Reader = require('./lib/utils/reader')
const ExplorerService = require('./lib/services/ExplorerService')

const explorersReaders  = Reader.readJsonFile("explorers.json")
console.log(explorersReaders)

const getExplorersWithStack = ExplorerService.getExplorersUsernamesByMission(explorersReaders, "node")
console.log(getExplorersWithStack)
// console.log(ExplorerService.getAmountOfExplorersByMission(explorersReaders, "node"));

const filterExplorersByMission = ExplorerService.filterByMission(explorersReaders, "java")
console.log(filterExplorersByMission)

/*const getExplorersByStack = ExplorerService.filterByMission(explorersReaders, "node")
console.log("imprimiendo la lista de explorers filtrandos por mision")
console.log(filterExplorersByMission) */


/*const getExplorersByStack = ExplorerService.getListExplorersByStack(explorersReaders, "java")
console.log(getExplorersByStack)  */


const getAmoung = ExplorerService.getAmountOfExplorersByMission(explorersReaders, "node")
console.log(getAmoung)