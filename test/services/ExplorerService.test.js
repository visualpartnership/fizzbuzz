const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }),
    test("Requerimiento 2: Retornar los explorers que tengan javascript en su stack", () => {
        const explorers = [{stacks: ["javascript"]}, {stacks: ["javascript", "elm"]}, {stacks: ["elm"]}];
        const explorersInJS = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInJS.length).toBe(2);
    });
});
