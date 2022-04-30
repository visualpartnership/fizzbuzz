const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Test de Explorer Controller", () => {
    test("Requeerimiento 2: filtrar explorers por stack javascript", () => {
        const explorersInStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInStack.length).toBe(11)
    })
})