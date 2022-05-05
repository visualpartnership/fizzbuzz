const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 4: Probando si filtra explorers por stack", () => {
        const explorers = [
            {
                mission: "node",
                nombre: "Explorer1",
                stacks: ["java", "ruby", "typescript"]
            },
            {
                mission: "java",
                nombre: "Explorer2",
                stacks: ["elixir", "javascript", "groovy"]
            }
        ];
        const explorersStack = ExplorerService.filterByStack(explorers, "elixir");

        expect(explorersStack.length).toEqual(1);
    });
});
