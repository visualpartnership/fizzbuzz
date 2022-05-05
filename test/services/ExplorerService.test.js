const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("2) Lista de explorers por stack",() => {
        const explorers = [{stacks: ["python","java"]},{stacks: ["php","javascript"]},{stacks: ["elixir","java"]},{stacks: ["javascript","java"]},{stacks: ["javascript","java"]}];
        const explorerStack = ExplorerService.getExplorersByStack(explorers,"javascript");
        expect(explorerStack.length).toBe(3);
    });

});
