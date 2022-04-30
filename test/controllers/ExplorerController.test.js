const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 2: Explorers que tengan en stack el valor recibido", () => {
        const stack = "javascript"
        const explorersByStack = ExplorerController.getExplorersByStack(stack);
        explorersByStack.forEach((explorer) => {
            expect(explorer.stacks).toEqual(
                expect.arrayContaining([stack]))
        });
        expect(explorersByStack.length).toBe(11);
    });

});