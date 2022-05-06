const ExplorerController = require ("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () =>{
    test("Filtrar explorers por su stack", () => { 
        const stack = "javascript";
        const explorersInJS = ExplorerController.filterByStack(stack);
        expect(explorersInJS.length).toBe(11);
    });
});