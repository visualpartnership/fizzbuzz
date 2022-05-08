const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getExplorersStackByMission(mission){//Creamos el medoto que toma un parametro, el cual sera llamado a server
        const explorers = Reader.readJsonFile("explorers.json");//Nos ayuda a leer los datos que hay en nuestra BD  
        return ExplorerService.getExplorersUsernamesByStacks(explorers, mission);//Mandamos a llamar de ExplorerServices el metodo para 
        //poder extraer el proceso de filtro
    }
}

module.exports = ExplorerController;
