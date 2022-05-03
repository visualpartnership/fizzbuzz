const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    
    test("Requerimiento 4: Regresar toda la lista de explorers filtrados por un stack.", () => {
        const explorers = [{name: "Woopa1",githubUsername: "ajolonauta1",score: 1,mission: "node",stacks: ["java","reasonML", "elm"]}];
        const explorersInStack = ExplorerService.filterByStack(explorers, "java");
        expect(explorersInStack.length).toBe(1);
    });

});
