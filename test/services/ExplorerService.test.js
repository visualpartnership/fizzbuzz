const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    
    test("Unit tesr for ExplorerService, getExplorersByStack", () =>{

        const explorers = [{
            name: "Woopa15",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
            stacks: ["javascript","groovy","elm"]
        },
        {
            name: "Woopa14",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
            stacks: ["javascript","groovy","elm"]
        }];
        const explorersInStack= ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInStack).toEqual(expect.objectContaining(explorers));

    });

});
