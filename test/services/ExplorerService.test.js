const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("to see if im getting elements from stack array", () => {
        const explorers = [{stacks: "elm"}];
        const explorersStack = ExplorerServices.filterByStack(explorers, "elm");
        expect(explorersStack.length).toBe(1);
    });
});
