const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Obtener explorers que cuenten con un stack", () => {
        const explorersWithStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersWithStack.length).toBe(11);
    });
});
