const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Nuevo requerimiento: Obtener una lista de explorers filtrado por Stack", () => {
        const explorers = [
            { stack: ["Node", "javascript"] }, 
            { stack:["python"] }, 
            { stack: ["javascript", "java"] }
        ];
        const explorersStack = ExplorerService.filterByStack(explorers);
        expect(explorersStack.length).toBe(2)
    })
});
