const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento de contribucion, que todos los explorers tengan en su stack un valor", () => {
        const explorers = [ {username: "Luis",stacks:["javascript", "php", "cobol"]}, {username: "Angel",stacks: ["C#", "python", "elixir"]}, {username: "Luian",stacks: ["C#", "javascript", "elixir"]}];
        const stack = "javascript";
        const explorerStack = ExplorerService.filterByStack(explorers, stack);
        
        console.log(explorerStack);
        expect(explorerStack[explorerStack.length-1].stacks).toContain("javascript");
    });

});
