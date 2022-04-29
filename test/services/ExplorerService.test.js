const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Nuevo requerimiento: debe de filtrar los explorers dado un stack", () => { 
        
        const explorers = [{name: "explorer1", stack: ["javascript", "c"]}, {name: "explorer2", stack: ["java"]}, {name: "explorer3", stack: ["javascript"]}];
        const explorersByStack = ExplorerService.getExplorersByStack(explorers, "javascript");

        expect(explorersByStack.every(explorer => explorer.stack.includes("javascript"))).toBe(true);
    });
});
