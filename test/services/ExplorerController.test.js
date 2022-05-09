const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", ()=> {
    test("test metodo ExplorersByStack", ()=>{
        const ExplorersByStack = ExplorerController.getExplorersByStack("javascript");
        expect(ExplorersByStack.length).toBe(11);
        
    });
    test("test 2 metodo ExplorersByStack", ()=>{
        const ExplorersByStack = ExplorerController.getExplorersByStack("elixir");
        expect(ExplorersByStack.length).toBe(9);
        
    });
});