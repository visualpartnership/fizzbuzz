const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 4: Obtener explorers por stack", () => {
        const explorersInJavascript = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInJavascript.length).toBeDefined();
    });
});