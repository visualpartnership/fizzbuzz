
const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {

    test("Requerimiento 2.- Listar los explorers filtrados por un stack", () => {

        const explorersByStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack[0].stacks).toContain("javascript");

    });

});