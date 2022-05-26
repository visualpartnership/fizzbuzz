const Reader = require('./lib/utils/reader')
const ExplorerService = require('./lib/services/ExplorerService')
const ExplorerController = require('./lib/controllers/ExplorerController')

const readFile = Reader.readJsonFile("explorers.json")
const readerExplorer =readFile.filter(readFile => readFile.stacks.join(", ").includes("elixir"))
console.log(readerExplorer)

console.log("=======================")
const readFile2 = Reader.readJsonFile("explorers.json")
const readerExplorer2 = ExplorerService.getListExplorersByStack(readFile2, "groovy")
console.log(readerExplorer2)
