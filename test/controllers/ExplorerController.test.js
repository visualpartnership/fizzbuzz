const ExplorerController=require("./../../lib/controllers/ExplorerController.js");
describe("Test para ExplorerController",()=>{
    test("Obtener todos los explorers con un stack determinado",()=>{
        const explorersByStack=ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack.length).toBe(11);
    });

});