const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    })
    test("Requerimiento 2: Obtener explorers que contengan X stack", () => {
        const explorers = [{ name: "Woopa1", stacks: ["javascript", "reasonML", "elm"] }, { name: "Woopa2", stacks: ["javascript", "groovy", "elm"] }, { name: "Woopa3", stacks: ["elixir", "groovy", "reasonML"] }];
        const explorersInStack = ExplorerService.getExplorersByStack(explorers, "elm");
        expect(explorersInStack.length).toBe(2);
    });
});