const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Calcular todos los explores por stack", () => {
        const explorersInJavascript = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInJavascript.length).toBe(11);
    });
});