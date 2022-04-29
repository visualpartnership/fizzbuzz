const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento : Filtrar explorer dependiendo de su tack", () => {
        const explorers = [{stack: "javascript"}];
        const explorersInStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInStack).not.toBeUndefined();
    });

});