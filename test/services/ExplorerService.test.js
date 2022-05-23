const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {   
    test("Requerimiento 1: Calcular total de explorers por mision", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1)
    });
    test("Endpoint Nuevo: Calcular la lista de explorers filtrados por un stack", () => {
        const explorers = [{mission: "node"}];
        const explorersStackNode = ExplorerService.getListExplorersByStack(explorers, "node");      
        expect(explorersStackNode.length).toBe(1);
    });
});


