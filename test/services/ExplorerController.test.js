const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento : Verificar que se obtienen los explorers con stack especifico", () => {
        const explorersInStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInStack).not.toBeUndefined();
    });
});