const Reader = require('./lib/utils/reader')
const ExplorerService = require('./lib/services/ExplorerService')

const readFile = Reader.readJsonFile("explorers.json")
// console.log(readFile) 

// console.log(readFile.filter((stacks) => stacks.stacks == 'elixir'))
const readerExplorer =readFile.filter(readFile => readFile.stacks.join(", ").includes("elixir"))
console.log(readerExplorer)
// const filterExplorerByMission = readFile.filter(stocks)
