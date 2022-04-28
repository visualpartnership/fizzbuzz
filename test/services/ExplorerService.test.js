const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento: Obtener todos los explorers con un stack determinado", () => {
        const explorers = [{githubUsername: "ajolonauta1",stacks: ["elm","javascript"]},{githubUsername: "ajolonauta2",stacks: ["javascript","elixir"]}];
        const explorersByStack=ExplorerService.filterByStack(explorers,"javascript");
        expect(explorersByStack.length).toBe(2);
    });

});
