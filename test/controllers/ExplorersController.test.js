const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Prueba para GetExplorersByStack", () => {
        const prueba1 = ExplorerController.getExplorersByStack("javascript");
        expect(prueba1.length).toBe(11);
    });
});
