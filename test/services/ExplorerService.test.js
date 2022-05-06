const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Endpoint explorers con stack x", () => {
        const name = "javascript";
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersWithStack = ExplorerService.filterByStack(explorers, name);
        expect(explorersWithStack.length).toBe(11);
    });

});
