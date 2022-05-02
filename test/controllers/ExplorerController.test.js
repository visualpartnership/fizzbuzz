const ExplorerController = require("../../lib/controllers/ExplorerController")
const FizzbuzzService = require("../../lib/controllers/ExplorerController")

describe("Tets para FizzBuzzService", () => {
    test("Prueba 1: Calculando todos los explorer de la mision node", () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);
    });
    test("Prueba 2: Obteniendo los usernames los explorer de la mision node", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });
    test("Prueba 3: Obteniendo la cantidad de explorer de la mision node", () => {
        const explorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorers).toBe(10);
    });

    test("Prueba 4: Uso de number 1 para la validacion de number", () => {
        const explorers = ExplorerController.applyFizzbuzz(1);
        expect(explorers).toBe(1)
    });

    test("Prueba 5: Uso de number 3 para la validacion de number", () => {
        const explorers = ExplorerController.applyFizzbuzz(3);
        expect(explorers).toBe("FIZZ")
    });

    test("Prueba 6: Uso de number 5 para la validacion de number", () => {
        const explorers = ExplorerController.applyFizzbuzz(5);
        expect(explorers).toBe("BUZZ")
    });

    test("Prueba 7: Uso de number 15 para la validacion de number", () => {
        const explorers = ExplorerController.applyFizzbuzz(15);
        expect(explorers).toBe("FIZZBUZZ")
    });

    test("Prueba 8: Filtrar explorers por stack", () => {
        const explorers = ExplorerController.getExplorersByStack("javascript");
        expect(explorers.length).toBe(11)
    });
})
