const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Mostrar todos los explorers en el stack javascript", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInStack = ExplorerService.filterExplorersByStack(explorers, "javascript");
        expect(explorersInStack.length).toBe(11);
    });
    
});
