const Reader = require('./../../lib/utils/reader');
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {

    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test('Prueba obteniendo explorers que tienen un stack en específico', () => {
        const explorers = Reader.readJsonFile('./test/data/ExplorersFileTest.json')
        const explorersInStackk = ExplorerService.getExplorersByStack(explorers, 'elm')

        expect(explorersInStackk.length).toBe(12)
    })

});
