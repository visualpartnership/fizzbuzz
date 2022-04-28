const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Regresar toda la lista de explorers filtrados por un stack.", () => {
        const explorers = [{name: "explorer1", mission: "node", stacks: ["javascript"]}, 
            {name: "explorer2", mission: "node", stacks: ["javascript", "groovy"]}];

        const explorersInJavascript = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInJavascript.length).toBe(2);
    });

});
