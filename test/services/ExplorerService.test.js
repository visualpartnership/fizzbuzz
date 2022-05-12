const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Devolver lista de explorers con ese stack", () => {
        const explorers = [{ stacks: "javascript" }];
        const explorersInStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInStack.length).toBe(1);
    });
});