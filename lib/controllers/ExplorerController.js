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
    static stack(lenguage){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.steack(explorers,lenguage)
    }
    static bootMenssage(msg){
        const mensaje = parseInt(msg);

        if(!isNaN(mensaje)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(mensaje);
            const responseBot = `Tu número es: ${mensaje}. Validación: ${fizzbuzzTrick}`;
            return responseBot;

        } else {
            if(msg === "Node"){
                const explorers = Reader.readJsonFile("explorers.json");
                const resultMensaje =  ExplorerService.getExplorersNameByMision(explorers, msg.toLowerCase());
                console.log(resultMensaje.toString());

                return resultMensaje.toString();
            }else{
                const result = `No entiendo tu mensaje, ${msg}`;
                return result;
            }
        }

    }
}

module.exports = ExplorerController;
