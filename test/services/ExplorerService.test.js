const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require('./../../lib/utils/reader');

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requeriemto 2: filtrar los explorers por stack", () => {
        //arrange and acts
        const explorers = Reader.readJsonFile('explorers.json');
        const explorersJS = ExplorerService.getExplorersByStack(explorers, 'JavaScript')
        //asserts
        for(let i = 0; i < explorersJS.length; i++){
            expect(explorersJS[i].stacks.includes('javascript')).toBeTruthy()
        }
    });

});
