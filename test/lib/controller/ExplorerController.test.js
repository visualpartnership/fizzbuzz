const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe("Unit Test for ExplorerController Class", () => {
    test("Obtener los explorers por mision", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorersMissionNode = ExplorerController.getExplorersByMission("node");
        const explorersMissionJava = ExplorerController.getExplorersByMission("java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(explorersMissionNode.length).toBe(10);
        expect(explorersMissionJava.length).toBe(5);
    });
    test("Obtener los usernames de los explorers por mision", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const usernamesMissionNode = ExplorerController.getExplorersUsernamesByMission("node");
        const usernamesMissionJava = ExplorerController.getExplorersUsernamesByMission("java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(usernamesMissionNode[0]).toBe("ajolonauta1");
        expect(usernamesMissionJava[0]).toBe("ajolonauta6");
    });
    test("Obtener la cantidad de usuarios por mision", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const amountMissionNode = ExplorerController.getExplorersAmonutByMission("node");
        const amountMissionJava = ExplorerController.getExplorersAmonutByMission("java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(amountMissionNode).toBe(10);
        expect(amountMissionJava).toBe(5);
    });
    test("Obtener Fizzbuzz dado por un numero en la funcion", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const fizzbuzz1 = ExplorerController.applyFizzbuzz(3);
        const fizzbuzz2 = ExplorerController.applyFizzbuzz(5);
        const fizzbuzz3 = ExplorerController.applyFizzbuzz(15);
        const fizzbuzz4 = ExplorerController.applyFizzbuzz(8);
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(fizzbuzz1).toBe("FIZZ");
        expect(fizzbuzz2).toBe("BUZZ");
        expect(fizzbuzz3).toBe("FIZZBUZZ");
        expect(fizzbuzz4).toBe(8);
    });
    test("Obtener Los explorers por stack", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const stackJavascript = ExplorerController.getExplorersByStack('javascript');
        const stackElm = ExplorerController.getExplorersByStack('elm');
        
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(stackJavascript.length).toBe(11);
        expect(stackElm.length).toBe(12);
    });
});