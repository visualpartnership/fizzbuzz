const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 4: Filtrar explorers por stack", () => {
        const explorers = [
            {name: "Explorer1", stacks: ["elixir", "javascript"]},
            {name: "Explorer2", stacks: ["elixir"]},
            {name: "Explorer3", stacks: ["javascript"]}
        ];
        const ExplorersByStack = ExplorerService.getExplorerByStack(explorers, "elixir");
        expect(ExplorersByStack.length).toBe(2);
    });
});
