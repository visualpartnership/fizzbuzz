const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Filtar explorers por stack", () => {
        const explorerStack = ExplorerController.getExplorersStack("javascript");
        expect(explorerStack.length).toBe(11);
    });
});