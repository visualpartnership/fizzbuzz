const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test suit for ExplorerController", () => {
    test(" Test for getExplorersByStack method in explorer controller", () => {
        const elixsers = ExplorerController.getExplorersByStack("elixir");
        const jsers = ExplorerController.getExplorersByStack("javascript");

        expect(jsers[0]).toBe("Woopa1");
        expect(elixsers[0]).toBe("Woopa3");
    });
});