const ExplorerController = require("../../lib/controllers/ExplorerController");
const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/reader");

describe("Tests para ExplorerController", () => {
    test("Prueba del metodo getExplorersByStack", () => {
        const explorerByStack = ExplorerController.getExplorersByStack("elixir");
        expect(explorerByStack[0].stacks).toContain("elixir");
    });
});
