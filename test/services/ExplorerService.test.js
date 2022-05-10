const ExplorerService = require("./../../lib/services/ExplorerService");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Pruevas para Open Source", () => {
        const explorersInNode = ExplorerController.getExplorersStackByMission("elm");
        expect(explorersInNode.length).toBe(2);
    });

});
