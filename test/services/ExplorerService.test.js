const ExplorerService = require("./../../lib/services/ExplorerService");
const fs = require("fs")
const rawdata = fs.readFileSync('test/data/explorers_test.json');
const explorers2 = JSON.parse(rawdata); 

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Metodo filterStack", () => { 
        const filterStack = ExplorerService.filterStack(explorers2, "javascript");
        expect(filterStack[0].stacks).toContain('javascript')
    });
});
