const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
<<<<<<< HEAD
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

=======
        // const explorers = [{mission: "node"}];
        // const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        // expect(explorersInNode.length).toBe(1);
    });
>>>>>>> e9e4243 (Se agrego servicio y pruebas para poder validar perfectamente el servicio)
});
