const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Obtener todos los explorers con cierto stack", () => {
        const explorers = [{stacks: ["java", "javascript"]}, {stacks:["javascript", "css"]}, {stacks: ["java"]}];
        const explorersInJava = ExplorerService.filterByStack(explorers, "java");
        expect(explorersInJava).toEqual([{stacks: ["java", "javascript"]}, {stacks: ["java"]}]);
    });
});
