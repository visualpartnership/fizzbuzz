const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Requerimiento: Obtener explorers por stack", () => {
        const byStack = ExplorerController.getExplorersByStacks("javascript");
        expect(byStack.length).toBe(11);
    });
});