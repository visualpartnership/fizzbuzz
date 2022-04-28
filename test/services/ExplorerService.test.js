const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento de filtrado por stack", () => {
        const explorers = [{"name": "Woopa1", "stacks": [
            "javascript",
            "reasonML",
            "elm"
        ]}, 
        {"name": "Woopa1", "stacks": [
            "reasonML",
            "elm"
        ]}];
        const explorersInStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInStack).toStrictEqual([{"name": "Woopa1", "stacks": [
            "javascript",
            "reasonML",
            "elm"
        ]}]);
    });

});
