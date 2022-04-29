const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: obtener todo los explorers en un stack", () => {
        const explorersWithStackJavascript = ExplorerController.getExplorersByStack('javascript');
        expect(explorersWithStackJavascript[0].stacks[0]).toBe('javascript');
    });
});