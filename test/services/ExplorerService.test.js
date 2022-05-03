const ExplorerService = require("./../../lib/services/ExplorerService");
describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Regresando lista de explorers filtrados por un stack", () => {
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        }];
        const explorerStack = ExplorerService.getStackExplorer(explorers,"javascript");
        expect(explorerStack[0].stacks).toContain("javascript");
    });
});
