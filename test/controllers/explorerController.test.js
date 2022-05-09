const ExplorerService = require("./../../lib/services/ExplorerService")


describe("Test para ExplorerController", () => {
    test("Requerimiento 1: filtrar explorers por stack", () => {
        const explorers =  [
            {
                name: "woopa1",
                stacks:[ "javascript", "python"]
            },
            {
                name: "woopa2",
                stacks:[ "python", "Java"]
            }];
        const explorersByStack = ExplorerService.filterByStack(explorers, "javascript")
        expect(explorersByStack.length).toBe(1)
    })
})