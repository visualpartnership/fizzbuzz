const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Calcular todos los explorers con una stack en específico",()=>{

        const ExplorersTest=[
            {"name": "User1", stacks:["javascript","elixir","elm"]},
            {"name": "USer2", stacks:["elm"]},
            {"name": "User3", stacks:["javascript","elixir",]},
            {"name": "User4", stacks:["elixir"]},
            {"name": "User5", stacks:["javascript","em"]}
        ];
        
        const value=ExplorerService.getExplorersByStack(ExplorersTest,"elixir");

        for(let i=0; i<value.length; i++) {
            expect(value[i].stacks).toContain("elixir");
        }

    });
});
