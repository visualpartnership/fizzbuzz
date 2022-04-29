const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Nuevo requerimiento: debe de filtrar los explorers dado un stack", () => { 
        
        const explorers = [{name: "explorer1", stacks: ["javascript", "c"]}, {name: "explorer2", stacks: ["java"]}, {name: "explorer3", stacks: ["javascript"]}];
        const explorersByStack = ExplorerService.getExplorersByStack(explorers, "javascript");

        console.log(explorersByStack);
        expect(explorersByStack.every(explorer => explorer.stacks.includes("javascript"))).toBe(true);
    });
});
