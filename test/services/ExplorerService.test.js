const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Regresar todos los explorers en una stack", () => {
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa3",
            "githubUsername": "ajolonauta3",
            "score": 3,
            "mission": "node",
            "stacks": [
                "elixir",
                "groovy",
                "reasonML"
            ]
        }
        ];
        const explorersInStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInStack.length).toBe(1);
    });

});
