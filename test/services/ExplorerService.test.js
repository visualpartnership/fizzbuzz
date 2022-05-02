const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
});

const explorers = [{stacks: ["javascript", "elixir"]},{stacks: ["elixir", "java"]},{stacks: ["javascript"]}];
const explorerWithStack = ExplorerService.getStack(explorers, "javascript");
test.each(explorerWithStack)("Requerimiento 2: Obtener el stack del explorer que contenga javascript", (explorer) => {
    expect(explorer.stacks).toContain("javascript");
});

