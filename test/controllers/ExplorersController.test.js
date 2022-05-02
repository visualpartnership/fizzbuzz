const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Requerimiento 1: Traer todos los explorers por stack", () => {
        const explorersInStack = ExplorerController.getExplorerByStack("javascript");
        expect(explorersInStack.length).toBe(11);
    });
});