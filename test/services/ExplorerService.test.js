const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obtener explorers que cuenten con un stack", () => {
        const explorers = [{stacks: ["javascript", "elm"]}, {stacks: []}, {stacks: ["elixir", "javascript"]}, {stacks: ["groovy", "java", "elixir", "javascript"]}, {stacks: ["elm", "elixir"]},];
        const explorersWithStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersWithStack.length).toBe(3);
    });
});
