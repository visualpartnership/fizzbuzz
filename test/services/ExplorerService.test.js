const ExplorerService = require("./../../lib/services/ExplorerService");
const explorers = [{mission: "node", stack: "javascript"}];

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento : Filtrar los explrers por stack javascript ",() =>{
        const explorersStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersStack.stack = "javascript").toMatch(/javascript/);
    });

});
