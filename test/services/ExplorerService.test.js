const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 1: Devolver todos los explorers que tengan un valor específico en su campo stacks", () => {
        const explorers = [{stacks: ["elixir", "javascript"]}];
        const explorersJavascriptInStacks = ExplorerService.getExplorersByStacks(explorers, "javascript");
        expect(explorersJavascriptInStacks).toBe({stacks: ["elixir", "javascript"]});
    });
});
