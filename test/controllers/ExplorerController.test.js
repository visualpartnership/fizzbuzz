const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Obtener explorers por stack", () => {
        const name = "javascript";
        const explorersWithStack = ExplorerController.getExplorersWithStack(name);
        expect(explorersWithStack.length).toBe(11);
    });

    test("Requerimiento 2: Refactorizacion de bot telegram (numero fizzbuzz)", () => {
        const numero = 15;
        const responseFizzBuzz = ExplorerController.botFizzBuzz(numero);
        expect(responseFizzBuzz).toBe("Tu número es: 15. Validación: FIZZBUZZ");
    });

    test("Requerimiento 3: Refactorizacion de bot telegram (nombre de explorers por mision)", () => {
        const mision = "node";
        const explorersByMission = ExplorerController.botExplorersByMission(mision);
        expect(explorersByMission).toBe('Lista de explorers para la mision node: ["ajolonauta1","ajolonauta2","ajolonauta3","ajolonauta4","ajolonauta5","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"]');
    });
});
