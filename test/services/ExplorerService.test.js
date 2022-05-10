const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Prueba del metodo getExplorersListByStack", () => {
        const explorers = [{"stacks": ["javascript","reasonML","elm"]},{"stacks": ["javascript","groovy","elm"]},{"stacks": ["elixir","groovy","reasonML"]}];
        const explorerByStack = ExplorerService.getExplorersListByStack(explorers, "elixir");
        expect(explorerByStack[0].stacks).toContain("elixir");
    });
});
