const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test de ExplorerController",() => {
    test('Filtrar explorers por stack', () => {
        const getFilterStack = ExplorerController.getFilterStack("javascript");

        expect(getFilterStack[0].stacks).toContain('javascript')
    })
}) 