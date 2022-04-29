const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorerStack = ExplorerController.getExplorersByStack("elixir")
        expect(explorerStack.length).toBe(9);
    });
})