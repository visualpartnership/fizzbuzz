const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests for ExplorerController modules", () => {
    test("1) Filtering explorers by stack", () => {
        const explorersByStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack.length).toBe(11);
    });

    test("2) Filtering explorers by stack given an empty stack", () => {
        const explorersByStack1 = ExplorerController.getExplorersByStack("");
        const explorersByStack2 = ExplorerController.getExplorersByStack([""]);
        const explorersByStack3 = ExplorerController.getExplorersByStack([""]);
        const explorersByStack4 = ExplorerController.getExplorersByStack();

        expect(explorersByStack1).toEqual([]);
        expect(explorersByStack2).toEqual([]);
        expect(explorersByStack3).toEqual([]);
        expect(explorersByStack4).toEqual([]);

    });
});