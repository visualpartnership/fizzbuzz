const ExplorerService = require("./../../lib/services/ExplorerService");
const reader = require("./../../lib/utils/reader");


describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Contribución Open Source: filtrar explorers por stack existente", () => {
        const explorers =reader.readJsonFile("./explorers.json");
        const explorersInNode = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInNode.length).toBe(11);
        
    });
    test("Contribución Open Source: filtrar explorers por stack inexistente", () => {
        const explorers =reader.readJsonFile("./explorers.json");
        const explorersInNode = ExplorerService.getExplorersByStack(explorers, "angular");
        expect(explorersInNode).toEqual([]);
        
    });

});
