const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", ()=>{
    test("Obtener los explorers que tengan javascript en su stack",()=>{
        const result = ExplorerController.getExplorersByStack("javascript");
        expect(result.length).not.toBe(0);
    });
});