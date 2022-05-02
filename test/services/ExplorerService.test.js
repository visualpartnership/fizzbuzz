const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/reader.js");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("2) Filter by stack", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const filtered = ExplorerService.filterByStack(explorers, "javascript");
        expect(filtered).not.toBeUndefined();
    });
});
