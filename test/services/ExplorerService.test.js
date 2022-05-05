const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    
    test("Requerimiento 2: Explorers filtrados por stack", () => {
        const explorers = [{stack: "javascript"}];
        const explorersByStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersByStack.length).toBe(1);
    });

});
