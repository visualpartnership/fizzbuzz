const ExplorerService = require("./../../lib/services/ExplorerService");
const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Nombres de los explorers con stack solicidado", () => {
        const explorerswithStack= ExplorerController.getExplorerStack("javascript");
        expect(explorerswithStack).toMatchObject(["ajolonauta1", "ajolonauta2", "ajolonauta4", "ajolonauta5", "ajolonauta9", "ajolonauta10", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });
});
