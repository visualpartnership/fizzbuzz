const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Contribución Open Source: Regresar lista de explorers filtrados por stack", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const results = ExplorerService.getExplorersByStack(explorers, "javascript");

        expect(results).not.toBe(undefined);
    });

});
