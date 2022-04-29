const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("2 Cantidad de explorers en la mission", () =>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersNode).toBe(10)
    });
    test("3 Usernames de los explorers", () =>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersNode[0]).toBe("ajolonauta1");
    });
    test("4 Obtener los stack", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const stackJavascript = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(stackJavascript.length).toBe(11);
    });

});
