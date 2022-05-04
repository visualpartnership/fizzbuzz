const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test('Requerimiento Open Source 1: Filtrar explorers por Stack', () => {
        const explorersStack = ExplorerController.getExplorersFilterByStacks("javascript");
        const ExplorersByStack = explorersStack.map((explorer) => explorer.name);
        expect(ExplorersByStack[4]).toMatch("Woopa9");
    });
})