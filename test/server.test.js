const ExplorerController = require("./../lib/controllers/ExplorerController");

describe("Testing stack endpoint", () => {

    test("Obtain explorer if includes stack", () => {
        const explorerstack = ExplorerController.getExplorersByStack("javascript");
        expect(explorerstack[0].name).toBe("Woopa1");
    });

});