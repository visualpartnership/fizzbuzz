const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento PR: Regresa una lista de explorers con el stack solicitado", () => {
        const explorers = [{
            stacks: [
                "javascript",
                "elixir"
            ]
        },
        {
            stacks: [
                "javascript",
                "groovy",
            ]
        },
        {
            stacks: [
                "elm",
                "java"
            ]
        }];
        const explorersWithStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersWithStack.length).toBe(2);
    });

});
