const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    const explorers = [{stacks: ["javascript", "elixir"]},{stacks: ["elixir", "java"]},{stacks: ["javascript"]}];
    const explorersWithJavascript = ExplorerService.filterByStack(explorers, "javascript");
    test.each(explorersWithJavascript)("Requerimiento: Crear un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack", (explorer) => {
        expect(explorer.stacks).toContain("javascript");
    });
});
