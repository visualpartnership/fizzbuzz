const Reader = require("../../lib/utils/reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test('Requerimiento 2: Obtener una lista de explorers con base en un stack', () => {
        const explorers = Reader.readJsonFile('./explorers.json');
        const explorersWithJavascriptStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersWithJavascriptStack[0]["stacks"]).toContain("javascript");
        const explorersWithElixirStack = ExplorerService.getExplorersByStack(explorers, "elixir");
        expect(explorersWithElixirStack[0]["stacks"]).toContain("elixir");
        const explorerUndefined = ExplorerService.getExplorersByStack(explorers);
        expect(explorerUndefined).toBeUndefined();
    })
    

});
