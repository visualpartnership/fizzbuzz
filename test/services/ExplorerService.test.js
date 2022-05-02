const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/reader")

describe("Tests para ExplorerService", () => {

    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("2) Filter explorers by mission, get amount and usernames ",()=>{

        //Código que se usa en la app
        const explorers = Reader.readJsonFile("explorers.json"); 

        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const usernamesOfExplorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        
        expect(explorersByMission[0].mission).toBe("node")
        expect(amountOfExplorersByMission).toBe(10)
        expect(usernamesOfExplorersByMission[0]).toBe("ajolonauta1")
        
    })

});
