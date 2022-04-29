const ExplorerContoller = require('./../../lib/controllers/ExplorerController')

describe("Test para ExplorerController" ,() => {
    test("Requerimiento 1: Obtener los explorers que cuenten con el stack solicitado", () => {
        const explorersByStack = ExplorerContoller.getExplorersByStack("elixir")
        expect(explorersByStack.length).not.toBe(0)
    })
})