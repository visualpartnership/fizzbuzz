const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Nuevo requerimiento: Obtener una lista de explorers filtrado por Stack", () => {
        const explorers1 = [
            { stacks: ["Node", "javascript"] }, 
            { stacks:["python"] }, 
            { stacks: ["javascript", "java"] }
        ];

        const explorers2 = [
            { stacks: ["java", "typescript", "javascript"]}, 
            { stacks:["node", "jest"]},
            { stacks: ["javascript", "java"]},
            { stacks: ["ruby", "java", "c"]},
            { stacks: ["elixir", "rust"]},
            { stacks: ["c#", "rust", "c"]},
            { stacks: ["javascript", "node", 'vue']}
        ];


        const explorersStack1 = ExplorerService.filterByStack(explorers1, 'javascript');
        expect(explorersStack1.length).toBe(2)

        const explorersStack2 = ExplorerService.filterByStack(explorers2, 'java');
        expect(explorersStack2.length).toBe(3)
    })
});
