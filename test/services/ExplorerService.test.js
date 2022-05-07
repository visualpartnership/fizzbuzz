const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    const explorersWithJavascript = ExplorerService.getExplorersByStack(explorers, "javascript");
    test.each(explorersWithJavascript)("Requerimiento 2.%#) explorers filtrados por un stack ", (explorer) => {
        expect(explorer.stacks).toContain("javascript");
    });

});
