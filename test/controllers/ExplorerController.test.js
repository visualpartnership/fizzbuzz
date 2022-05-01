const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test Suits for ExplorerController.js", () => {
    test("Contribución Open Source: Regresar lista de explorers filtrados por stack", () => {
        const results = ExplorerController.getExplorersByStack("javascript");
        console.log(results);

        expect(results).not.toBe(undefined);
    });
});