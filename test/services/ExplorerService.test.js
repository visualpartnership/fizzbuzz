const Reader = require("../../lib/utils/reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const explorers = Reader.readJsonFile("explorers.json");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("2. Filtrar los explorers por stack", ()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        const filter = ExplorerService.getExplorersByStack(explorers, "javascript");
        const filter1 = ExplorerService.getExplorersByStack(explorers, "elm");
        const filter2 = ExplorerService.getExplorersByStack(explorers, "groovy");
        const filter3 = ExplorerService.getExplorersByStack(explorers, "reasonML");
        const filter4 = ExplorerService.getExplorersByStack(explorers, "elixir");

        for(let i =0; i<filter.length; i++){expect(filter[i].stacks).toContain("javascript");}
        for(let i =0; i<filter1.length; i++){expect(filter1[i].stacks).toContain("elm");}
        for(let i =0; i<filter2.length; i++){expect(filter2[i].stacks).toContain("groovy");}
        for(let i =0; i<filter3.length; i++){expect(filter3[i].stacks).toContain("reasonML");}
        for(let i =0; i<filter4.length; i++){expect(filter4[i].stacks).toContain("elixir");}
    });

});
