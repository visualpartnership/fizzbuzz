const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Encontrar Explorers por stack", () => {
        const explorersByStack = ExplorerController.getExplorerByStack("javascript")
        expect(explorersByStack.length).toBe(15);
    });

});