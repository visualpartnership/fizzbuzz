const ExplorerService = require("./../../lib/services/ExplorerService");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2 : Mostrar la lista de explorers filtrados por un stack.", () =>{
        const explorerssStack = ExplorerController.getExplorersStacks("javascript");
        const expected = [
            {
                name: "Woopa4",
                githubUsername: "ajolonauta4",
                mission: "node",
                score: 4,
                stacks: ["javascript"],
            },
        ];
        expect(explorerssStack).toEqual(expect.arrayContaining(expected));
    });

});
