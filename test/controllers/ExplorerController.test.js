const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 2: Calcular todos los explorers en un stack", () => {
        const explorersInNode = ExplorerController.getExplorersByStack("elm");
        expect(explorersInNode.length).toBeGreaterThan(1);
    });
});