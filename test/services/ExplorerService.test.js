const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {   
    test("Requerimiento 1: Calcular total de explorers por mision", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1);
    });
    test("Endpoint Nuevo: Mostrar la lista de explorers filtrados por un stack", () => {       
        const explorerData = [{
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node",
            stacks: [
              "javascript",
              "reasonML",
              "elm",
            ]
        }]
        const explorersByStackJavascript = ExplorerService.getListExplorersByStack(explorerData, "javascript");      
        expect(explorerData[0].stacks).toEqual("elm")
        //expect(explorerData[0].stacks).toEqual(expect.arrayContaining(["elm"]));
    });
});


