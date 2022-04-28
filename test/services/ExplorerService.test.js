const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Filtrar explorers por stack", () => {
        const explorers = [{stacks: "c#, javascript, elixir"}];
        const explorersInNode = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInNode.length).toBe(1);
    });

});
