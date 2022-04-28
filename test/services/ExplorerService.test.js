const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader.js");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 4: Crear un nuevo endpoint para un cliente nuevo getExplorerByStack",() =>{
        const stack = "javascript";
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByStack = ExplorerService.filterByStack(explorers, stack);
        console.log(explorersByStack);
        expect(explorersByStack.length).toBe(11)
    })
});
