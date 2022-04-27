const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento nuevo filtro: regresa todos los explorers que cuenten con un stack", () => {
        const explorers = [{stacks:["javascript", "node", "elixir"]},{stacks:["elixir"]},{stacks:["javascript"]}];
        const explorersInJavascript = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInJavascript.length).toBe(2);
        for(let explorer of explorersInJavascript){
            expect(explorer.stacks).toContain("javascript");
        }
        const explorersInElixir = ExplorerService.getExplorersByStack(explorers, "elixir");
        expect(explorersInElixir.length).toBe(2);
        for(let explorer of explorersInElixir){
            expect(explorer.stacks).toContain("elixir");
        }
    });

});
