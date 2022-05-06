const ExplorerService = require("./../../lib/services/ExplorerService");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test('Prueba filtrado por stack', ()=>{

        const explorers = ExplorerController.getExplorersStack("javascript");
        expect(explorers[0].stacks).toContain("javascript");

    })

});
