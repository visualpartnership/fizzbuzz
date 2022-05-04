const ExplorerController = require("../../lib/controllers/ExplorerController");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Devolver todos los explorers que tengan un stack especifico.", () =>{
        const explorers = [{name: "raul", stacks: "javascript"}, {name: "raul2", stacks: ["javascript"]}, {name: "raul3", stacks: ["javascript", "groovy", "elm"]}, {name: "raul2", stacks: ["groovy"]}];
        const explorersByStack = ExplorerService.explorersByStack(explorers, "javascript");
        expect(explorersByStack).toStrictEqual([{name: "raul", stacks: "javascript"}, {name: "raul2", stacks: ["javascript"]}, {name: "raul3", stacks: ["javascript", "groovy", "elm"]}]);
    });

});
