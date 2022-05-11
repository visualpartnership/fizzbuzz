const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerService", () => {
    test("Requerimiento : Filtrar a los explorers por su stack", () =>{
        const explorersByStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack.length).toBe(11);
    });

});