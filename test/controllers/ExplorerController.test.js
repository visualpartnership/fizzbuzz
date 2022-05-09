const ExplorerController = require("../../lib/controllers/ExplorerController");
describe("Prueba de unidad de para ExplorerController", () => {
    test("Obtener explorers por misión", () => {
        const explorers = ExplorerController.getExplorersByStack("javascript");
        expect(explorers.length).toBeGreaterThanOrEqual(10);
    });
});