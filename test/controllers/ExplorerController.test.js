const ExplorerController = require("./../controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 2: Calcular todos los explorers en un stack", () => {
        const explorers = [{stack: "node"}];
        const explorersInNode = ExplorerController.filterByStack(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
});