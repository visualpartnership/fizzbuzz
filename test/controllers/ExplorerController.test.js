const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Pruebas de unidad de la clase ExplorerController", () => {
    test("Requerimiento 4: Obtener lista de explorers que contengan el stack", () => {
        const explorersByStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack.length).toBe(11);
    });
});