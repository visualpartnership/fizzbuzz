const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento : calcular todos los explorers segun su stack que sea javascript", () => {
        const explorers = [{ stacks: ["javascript"] }, { stacks: ["elixir"] }];
        const explorersInStack = ExplorerService.filterExplorersByStack(
            explorers,
            "javascript"
        );

        expect(explorersInStack.length).toBe(1);
        expect(explorersInStack[0].stacks[0]).toBe("javascript");
    });
});
