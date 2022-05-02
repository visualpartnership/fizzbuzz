const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Lista explorers por stack", () => {
        const explorers = [{mission: "node", stacks: ["javascript", "python"]}, {mission: "node", stacks: "frontend"}];
        const explorersContainsJavaScript = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersContainsJavaScript.length).toBe(1);
    });
});
