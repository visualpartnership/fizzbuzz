const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");      
        expect(explorersInNode.length).toBe(1);
    });
});

describe("Test para nuevo Endpoint", () => {
    test("Obtener una lista de explorer filtrados por un stack", () => {
        const explorers = [{
            name: "Woopa5",
            githubUsername: "ajolonauta5",
            score: 5,
            mission: "node",
            stacks: [
                "javascript",
                "elixir",
                "elm"
            ]
        }];
        const listExplorersByStack =  ExplorerService.getListExplorersByStack(explorers, "node");
        expect(listExplorersByStack[0]).toBe("ajolonauta5")
        console.log(listExplorersByStack)
    })
})
