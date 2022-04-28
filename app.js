const ExplorerService = require("./lib/services/ExplorerService");
const Reader = require("./lib/utils/reader")

const explorers = Reader.readJsonFile("explorers.json")
explorersbystack = ExplorerService.filterByStack(explorers,"javascript");
console.log(explorersbystack)