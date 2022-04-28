const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Explorers by stack", () => {
        const explorers = [{"name": "Woopa1","stacks": ["javascript","reasonML","elm"]},
            {"name": "Woopa2","stacks": ["javascript","groovy","elm"]},
            {"name": "Woopa3","stacks": ["elixir","groovy","reasonML"]}];
        const elixsers = ExplorerService.getExplorersByStack(explorers, "elixir");
        const jsers = ExplorerService.getExplorersByStack(explorers, "javascript");

        expect(jsers[0]).toBe("Woopa1");
        expect(elixsers[0]).toBe("Woopa3");
    });
});
