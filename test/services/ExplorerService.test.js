const ExplorerService = require("./../../lib/services/ExplorerService");
const read = require ("./../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento Contribución: Calcular todos los explorers filtrados por stack", () => {
        const explorers = read.readJsonFile("explorers.json");
        const explorersByStack = ExplorerService.getExplorersByStack(explorers,"javascript");
        const explorersByStack2 = ExplorerService.getExplorersByStack(explorers,"elm");
        expect(explorersByStack[0].stacks).toEqual(expect.arrayContaining(["javascript"]));   
        expect(explorersByStack.length).toBe(11);
        expect(explorersByStack2[0].stacks).toEqual(expect.arrayContaining(["elm"]));   
        expect(explorersByStack2.length).toBe(12);
         
         
    });

});
