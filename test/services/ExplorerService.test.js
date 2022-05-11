const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento : Filtrar a los explorers por su stack", () =>{
        const explorers = [{stacks: ["node", "javascript"]}, {stacks: ["node", "javascript"]}];
        const explorersByStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersByStack.length).toBe(2);
    });

});
