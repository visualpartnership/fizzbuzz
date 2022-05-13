const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Retornar Lista de Explorers que contengan en Stack el valor proporcionado", () => {
        const explorersList = Reader.readJsonFile("explorers.json");
        const stack = "javascript";
        const explorersInStack = ExplorerService.getExplorersByStack(explorersList, stack);
        expect(explorersInStack[0].stacks).toContain("javascript");
    });

});
