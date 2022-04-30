const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Obtener explorers por stack", () => {
        const explorers = [{name: "Woopa", stacks: ["javascript", "elixir", "elm"]}, {name: "Woopa2", stacks: ["elixir", "elm", "groovy"]}];
        const stack = "javascript";
        const result = ExplorerService.filterByStack(explorers, stack);
        expect(result[0].stacks.some((stack) => stack === "javascript")).toBe(true);
        expect(result.length).toBe(1);
    })

});
