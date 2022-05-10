const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Obtener todos los explorers que tengan en su stack javascript", ()=>{
        const explorers = [{name: "Woopa1",githubUsername: "ajolonauta1",score: 1,mission: "node",stacks: [
            "javascript","reasonML","elm"]}];
        const response = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(response.length).toBe(1);
    });

});
