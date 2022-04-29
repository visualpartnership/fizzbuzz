const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Pruebas unitarias Explorer Controller",()=>{
    test ("test para validar 1",()=>{
        const explorerbymission = ExplorerController.getExplorersByMission("node");
        expect(explorerbymission[0].name).toBe("Woopa1");

    });
   
    test("test para validar score",()=>{
        const score = 1
        const explorerscore = ExplorerController.applyFizzbuzz(score)
        expect(explorerscore).toBe(1)

    })

    

});