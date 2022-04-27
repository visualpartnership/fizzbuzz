const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Retornar los explorers del stack indicado", () => {
        const explorers = [
            {
                "name": "Woopa1",
                "stacks": ["javascript", "reasonML", "elm"]
            },
            {
                "name": "Woopa2",
                "stacks": ["javascript", "groovy", "elm"]
            },
            {
                "name": "Woopa3",
                "stacks": ["elixir", "groovy", "reasonML"]
            },
            {
                "name": "Woopa4",
                "stacks": ["javascript"]
            }
        ];

        expect(ExplorerService.filterByStack(explorers, "javascript").length).toBe(3);
    });

});
