const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test de ExplorerController",() => {
    test('Filtrado de explorers por stack', () => {
        const ExplorersByStacks = ExplorerController.getExplorersByStacks("javascript");

        expect(ExplorersByStacks[5].stacks).toEqual(expect.arrayContaining(["javascript"]));
    })
})