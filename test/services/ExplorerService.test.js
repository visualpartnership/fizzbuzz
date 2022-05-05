const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require('./../../lib/utils/reader')

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test('Contribución Open Source: obtener explorers que tenga el stack de javascript', () =>{
        const explorers = Reader.readJsonFile("test/services/data/explorers.json");
        const filtered_explorers = ExplorerService.getExplorersByStack(explorers, 'javascript');

        expect(filtered_explorers).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Woopa1"}),
                expect.objectContaining({"name": "Woopa2"}),
                expect.objectContaining({"name": "Woopa4"}),
                expect.objectContaining({"name": "Woopa5"}),
                expect.objectContaining({"name": "Woopa9"}),
                expect.objectContaining({"name": "Woopa10"}),
                expect.objectContaining({"name": "Woopa11"}),
                expect.objectContaining({"name": "Woopa12"}),
                expect.objectContaining({"name": "Woopa13"}),
                expect.objectContaining({"name": "Woopa14"}),
                expect.objectContaining({"name": "Woopa15"})
            ])
        );
    })

});
