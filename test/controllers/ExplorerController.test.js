const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Obtener explorers por stack", () => {
        const name = "javascript";
        const explorersWithStack = ExplorerController.getExplorersWithStack(name);
        expect(explorersWithStack.length).toBe(11);
    });

    test("Requerimiento 2: Bot. Obtener explorers por mision (inexistente)", () => {
        const mision = "sdfsdfsdfs";
        const explorersWitMission = ExplorerController.botExplorersByMission(mision);
        expect(explorersWitMission).toBe("No hay explorers con misión sdfsdfsdfs");
    });

    test("Requerimiento 3: Bot. Obtener explorers por mision (válida)", () => {
        const mision = "node";
        const explorersWithMission = ExplorerController.botExplorersByMission(mision);
        expect(explorersWithMission).toContain("Woopa12");
    });

    test("Requerimiento 4: Bot FizzBuzz", () => {
        const score = "15";
        const calificacion = ExplorerController.botFizzBuzz(score);
        expect(calificacion).toBe("Tu número es: 15. Validación: FIZZBUZZ");
    });
});
