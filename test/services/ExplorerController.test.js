const ExplorerControllerService = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerControllerService", () => {
    test("Requerimiento: Buscar explorers por stack", () => {
        const stack = "javascript";
        const explorersStack = ExplorerControllerService.getExplorersByStack(stack);
        expect(explorersStack.length).toBe(11)
    });
});
