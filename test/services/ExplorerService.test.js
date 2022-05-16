const Reader = require("../../lib/utils/reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Obtener todos los explorers en un stack", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInStack).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Woopa1"}), // This explorer is in javascript
                expect.objectContaining({"name": "Woopa2"}), // This explorer is in javascript
                //expect.objectContaining({"name": "Woopa3"}), // This explorer isn't in javascript
                expect.objectContaining({"name": "Woopa15"}) // This explorer is in javascript
            ])
        );
    });

});
