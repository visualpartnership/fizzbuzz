const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Nuevo requerimiento: Devolver explorers con un stack especifico", () => {
        const explorers =  [{stacks:[ "javascript", "python"]}];
        const explorersByStack = ExplorerService.filterExplorersByStack(explorers, "javascript");
        expect(explorersByStack).toEqual([{stacks: ["javascript", "python" ]}]);
    });
    test("2) Nuevo requerimiento: Devolver explorers con un stack especifico", () => {
        const explorers =  [
            {
                name: "woopa1",
                stacks:[ "javascript", "python"]
            },
            {
                name: "woopa2",
                stacks:[ "python", "Java"]
            }];
        const explorersByStack = ExplorerService.filterExplorersByStack(explorers, "javascript");
        expect(explorersByStack.length).toBe(1);
    });
});
