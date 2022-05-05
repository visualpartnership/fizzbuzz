const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Obtener explorers por stack", () => {
        const name = "javascript";
        const explorersWithStack = ExplorerController.getExplorersWithStack(name);
        expect(explorersWithStack.length).toBe(11);
    });
});
