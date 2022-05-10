const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests unitarios para FizzBuzz stacks", () => {
    test("Explorers Filtrados Por stack", () => {
        const explorersInNode = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInNode.length).toBe(11);
    });
});