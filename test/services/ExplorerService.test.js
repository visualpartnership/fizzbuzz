const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Obtener los explorers que en su stack contengan cierto valor", () => {
        const explorers = [{explorer: "explorer1", stacks: ["javascript", "elixir"]},
                           {explorer: "explorer2", stacks: ["php", "elixir"]},
                           {explorer: "explorer3", stacks: ["javascript","php", "java"]}]
        const explorersInStack = ExplorerService.explorersByStack(explorers, "elixir")
        expect(explorersInStack.length).toBe(2)                   
    })
});
