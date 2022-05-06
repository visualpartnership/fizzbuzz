const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Calcular todos los explorers que tengan un stack", () => {
        const explorers = [{stacks: ["javascript", "groovy"]}, {stacks: ["elixir", "groovy"]}, {stacks: ["elm", "javascript"]}];
        const explorersByStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersByStack.length).toBe(2);
    });
});
