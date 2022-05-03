const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Nuevo requerimiento: Lista de explorers filtrados por stack", () => {
        const explorers = [
            {
                name: "Woopa1",
                stacks: ["javascript"]
            },
            {
                name: "Woopa2",
                stacks: ["java"]
            }
        ];

        const explorersByStacks = ExplorerService.getExplorerStacks(explorers,"javascript");
        expect(explorersByStacks[0].stacks[0]).toBe("javascript");
    });

});
