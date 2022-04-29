const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Regresar lista de explorers filtrados por stack", () => {
        const explorers = [{stacks: "javascript"}];
        const explorersWithJS = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersWithJS.length).toBe(1);
    });

});
