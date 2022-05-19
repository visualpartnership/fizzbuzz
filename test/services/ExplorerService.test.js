const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 4: Lista de explorers filtrados por un stack", () => {
        const explorers =
            [
                { "name": "Woopa1", "mission": "node", "stacks": ["javascript", "reasonML", "elm"] },
                { "name": "Woopa2", "mission": "node", "stacks": ["javascript", "groovy", "elm"] },
                { "name": "Woopa3", "mission": "java", "stacks": ["elixir", "groovy", "reasonML"] }
            ];
        const explorersListWithJsStack = ExplorerService.getExplorersByStack(explorers, "javascript");

        expect(explorersListWithJsStack).toHaveLength(2);
        expect(explorersListWithJsStack[0].stacks).toEqual(expect.arrayContaining(["javascript"]));
        expect(explorersListWithJsStack[1].stacks).toEqual(expect.arrayContaining(["javascript"]));
    });

});
