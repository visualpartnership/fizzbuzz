const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Encontrar Explorers por stack", () => {
        const explorersByStacks = ExplorerController.getExplorerByStack("javascript")
        expect(explorersByStacks.length).toBe(11);
    });
});