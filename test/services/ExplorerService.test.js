const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Obtener los explorers por stack", () => {
        const explorers = [{stacks: ["node"]}, {stacks: ["node"]}, {stacks: ["javascript"]}];
        const explorersInNode = ExplorerService.getExplorersByStack(explorers, "node");
        const explorersInJavascript = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInNode.length).toBe(2);
        expect(explorersInJavascript.length).toBe(1);
    });

});
