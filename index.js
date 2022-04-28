const Reader = require("./lib/utils/Reader");
const ExplorerService=require("./lib/services/ExplorerService");
const FizzbuzzService=require("./lib/services/FizzbuzzService");

const listaExplorers = Reader.readJsonFile("explorers.json");
console.log(ExplorerService.filterByMission(listaExplorers,"node"));
console.log(ExplorerService.getAmountOfExplorersByMission(listaExplorers,"node"));
console.log(ExplorerService.getExplorersUsernamesByMission(listaExplorers,"node"));


const explorer1 = {name: "Explorer1", score: 1, trick:0};
console.log(FizzbuzzService.applyValidationInExplorer(explorer1) );// {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3, trick:0};
console.log(FizzbuzzService.applyValidationInExplorer(explorer3) );// {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5,  trick:0};
console.log(FizzbuzzService.applyValidationInExplorer(explorer5) );// {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15,  trick:0};
console.log(FizzbuzzService.applyValidationInExplorer(explorer15) );// {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
