const ExplorerController=require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController ",()=>{
    test("ExplorerController regresa lista de Explorers con cierto Stack",()=>{
        const listExplorers=ExplorerController.getExplorersArrayByStack("elixir");

        for(let i=0;i<listExplorers.length;i++) {
            expect(listExplorers[i].stacks).toContain("elixir");
        }
        
    });
});