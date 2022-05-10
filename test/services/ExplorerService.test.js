const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obtener explorers por filtro de stack", ()=>{
        const explorers = [
            {
              "name": "Woopa1",
              "githubUsername": "ajolonauta1",
              "score": 1,
              "mission": "node",
              "stacks": [
                "javascript",
                "reasonML",
                "elm"
              ]
            }
        ]
        const filtered_explorers = ExplorerService.filterByStack(explorers, "javascript")
        expect(filtered_explorers).toEqual(explorers)
    })

});
