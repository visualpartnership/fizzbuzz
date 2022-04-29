const Reader = require("./../../lib/utils/reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Filtrar explorers por stack", () => {
    // const explorers = { stacks: ["c#", "javascript", "elixir"] };
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByStack(
            explorers,
            "javascript"
        );

        expect(explorersInNode[0].stacks[0]).toBe("javascript");
    });
});
