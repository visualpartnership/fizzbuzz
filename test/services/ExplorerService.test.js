const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Nuevo requerimiento: Obtener una lista de explorers filtrado por Stack", () => {
        const explorers1 = [
            { stack: ["Node", "javascript"] }, 
            { stack:["python"] }, 
            { stack: ["javascript", "java"] }
        ];

        const explorers2 = [
            { stack: ["java", "typescript", "javascript"]}, 
            { stack:["node", "jest"]},
            { stack: ["javascript", "java"]},
            { stack: ["ruby", "java", "c"]},
            { stack: ["elixir", "rust"]},
            { stack: ["c#", "rust", "c"]},
            { stack: ["javascript", "node", 'vue']}
        ];


        const explorersStack1 = ExplorerService.filterByStack(explorers1, 'javascript');
        expect(explorersStack1.length).toBe(2)

        const explorersStack2 = ExplorerService.filterByStack(explorers2, 'java');
        expect(explorersStack2.length).toBe(3)
    })
});
