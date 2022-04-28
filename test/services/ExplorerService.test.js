const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Obtener los explorers por stack", () => {
        const explorers = [{stack: "node"}, {stack: "node"}, {stack: "javascript"}];
        const explorersInNode = ExplorerService.getExplorersByStack(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });

});
