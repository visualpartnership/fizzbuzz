const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requirement 2 : Get all explorers that have the same stack", () => {
        const explorers1 = [{stacks: ["javascript", "react", "node"]}];
        const explorers2 = [];
        const explorers3 = [{stacks: ""}];

        const explorersInStack1 = ExplorerService.getExplorersByStack(explorers1, "javascript");
        const explorersInStack2 = ExplorerService.getExplorersByStack(explorers2, "javascript");
        const explorersInStack3 = ExplorerService.getExplorersByStack(explorers3, "javascript");

        expect(explorersInStack1.length).toBe(1);
        expect(explorersInStack2).toBe("No explorers found");
        expect(explorersInStack3).toBe("No explorers found");
    });
});
