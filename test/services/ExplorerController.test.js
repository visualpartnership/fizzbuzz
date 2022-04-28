const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Prueba para verficar el ExplorerController", () => {
    test("1 Obtener los explorers por JavaScript", () => {
        const explorersMissionNode = ExplorerController.getExplorersByMission("node");
        expect(explorersMissionNode.length).toBe(10);
       
    });
    test("2 Obtener los usernames de los explorers", () => {
        const usernamesMissionNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesMissionNode[0]).toBe("ajolonauta1");
        
    });
    test("3 Obtener la cantidad de usuarios", () => {
        const amountMissionNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountMissionNode).toBe(10);
    });
    test("4 Obtener los trick", () => {
        const fizzbuzz3 = ExplorerController.applyFizzbuzz(3);
        const fizzbuzz5 = ExplorerController.applyFizzbuzz(5);
        const fizzbuzz15 = ExplorerController.applyFizzbuzz(15);
        const fizzbuzz1 = ExplorerController.applyFizzbuzz(1);
        expect(fizzbuzz3).toBe("FIZZ");
        expect(fizzbuzz5).toBe("BUZZ");
        expect(fizzbuzz15).toBe("FIZZBUZZ");
        expect(fizzbuzz1).toBe(1);
    });
    test("5 Obtener los stack", () => {
        const stackJavascript = ExplorerController.getExplorersByStack('javascript');
        expect(stackJavascript.length).toBe(11);

    });
});