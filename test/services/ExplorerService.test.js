const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obtener explorers por un stack", () => {
        const explorers = [{stacks: ["html","javascript"]}];
        const explorersInStack = ExplorerService.filterByStack(explorers, "html");
        expect(explorersInStack.length).toBe(1);
    });

    test("Requerimiento 3: Obtener explorers por un stack no listado", () => {
        const explorers = [{stacks: ["html","javascript", "elixir"]}];
        const explorersInStack = ExplorerService.filterByStack(explorers, "node");
        expect(explorersInStack.length).toBe(0);
    });

});
