const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController",()=> {

    test("1. Filter list of explorers by mission",()=>{
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);        
    });

    test("2. Filter list of explorers by stack",()=>{
        const explorers = ExplorerController.getExplorersByStack("javascript");
        expect(explorers.length).toBe(11);        
    }); 
   
});