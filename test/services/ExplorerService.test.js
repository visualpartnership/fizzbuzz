const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obtener los explorers por stacks", () => {
        const explorers = [
            { "name": "Woopa1", "stacks": ["javascript", "reasonML", "elm"] },
            { "name": "Woopa2", "stacks": ["javascript", "groovy", "elm"] },
            { "name": "Woopa3", "stacks": ["c#", "python"] },
            { "name": "Woopa4", "stacks": ["javascript", "elm"] }
        ];
        const byStack = ExplorerService.getExplorersByStacks(explorers, "javascript");
        expect(byStack.length).toBe(3);
    });
});
