const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obtener los explorers que tengan un stack", () => {
        const explorers = [{mission: "node", stacks: ["node", "javascript", "css"]}];
        const explorersJavascript = ExplorerService.filterByStack(explorers, "javascript");

        expect(explorersJavascript.length).toBe(1);
    });

});
