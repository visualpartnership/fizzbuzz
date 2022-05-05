const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Requerimiento: Obtener una lista de explorers a partir de un stack", () => {
        const javascriptExplorers = ExplorerController.getExplorersByStack("javascript");
        expect(javascriptExplorers.length).toBe(11);
        expect(javascriptExplorers[0].stacks).toContain("javascript");
        const groovyExplorers = ExplorerController.getExplorersByStack("groovy");
        expect(groovyExplorers.length).toBe(9);
        expect(groovyExplorers[0].stacks).toContain("groovy");
    });
});