const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Testing ExplorerControleler", () => {

    test("Return list of explorers with certain stack included", () => {
        const explorers = ExplorerController.getExplorersByStack("javascript");
        expect(explorers.length).toBe(11);
    });

});