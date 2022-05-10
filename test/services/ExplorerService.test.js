const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    //Add test to get explorers by stack
    test("N. Get explorers by stack",() =>{
        const explorers = [{stacks: ["javascript"]}]
        const explorersStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersStack.length).toBe(1);
    });
});
