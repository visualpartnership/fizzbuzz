const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test suite para ExplorerController", () => {

    test("Requerimiento 1: Obtener los explorers que tengan un stack determinado", () => {
    
        const explorersJavascript = ExplorerController.getExplorersByStack("javascript");
        
        expect(explorersJavascript.length).toBe(11);
    });
});