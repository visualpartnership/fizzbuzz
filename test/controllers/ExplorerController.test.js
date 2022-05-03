const ExplorerController = require("./../../lib/controllers/ExplorerController");
describe("Test para el archivo ExplorerControllers", () => {
    test("1) Requerimiento: Filtrar explorers por su stack", () => {
        const explorersByStack = ExplorerController.getExplorersByStacks("javascript");
        expect(explorersByStack.length).toBe(11);
    });
    test("2) Requerimiento: Filtrar explorers por su stack", () => {
        const explorersByStack = ExplorerController.getExplorersByStacks("elixir");
        expect(explorersByStack.length).toBe(9);
    });
});