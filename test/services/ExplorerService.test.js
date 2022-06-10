const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 4: Filter explorers by Stack", () => {
	const explorers=Reader.readJsonFile("explorers.json");
        const explorersInStackE = ExplorerService.getExplorersByStack(explorers,"elixir");
        const explorersAmountInStackE = explorersInStackE.length;
        expect(explorersAmountInStackE).toBe(9);
    });

});
