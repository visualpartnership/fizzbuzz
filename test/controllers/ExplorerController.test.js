const ExplorerController = require("./../../lib/controllers/ExplorerController");


describe("Tests para ExplorerController", () => {
    test("Requerimiento 4: Regresar toda la lista de explorers filtrados por un stack.", () => {
        const explorersInStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInStack.length).toBe(11);
    });

});
