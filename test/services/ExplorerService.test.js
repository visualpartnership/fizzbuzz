const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Obtener explorers filtrados por un stack", () => {
        const explorers = Reader.readJsonFile("test/explorers.test.json");
        const explorersWithStack = ExplorerService.getExplorerByStack(explorers, "elixir");
        expect(explorersWithStack.length).not.toBe(0);
    });
});
