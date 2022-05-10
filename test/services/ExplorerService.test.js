const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }),
    test("Requerimiento 2: Retornar los explorers que tengan javascript en su stack", () => {
        const explorers = [{stack: ["javascript"]}, {stack: ["javascript", "elm"]}, {stack: ["elm"]}];
        const explorersInJS = ExplorerService.getExplorersUsernamesByStack(explorers, "javascript");
        expect(explorersInJS.length).toBe(2);
    });
});
