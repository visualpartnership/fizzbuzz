const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit test", () =>{
    test("Tes para filtar a los explorers por stacks", ()=>{
        const explorersWithJavaScript = ExplorerController.getExplorersWithStack("javascript");
        expect(explorersWithJavaScript.length).toBe(11); 
    });
}); 