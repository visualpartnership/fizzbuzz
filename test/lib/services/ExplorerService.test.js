const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/reader");

describe("Unit Test for Reader Class", () => {
    test("Read a class for filter by mission and map de username by mission", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.filterByMission(explorers, "node");
        const explorersJava = ExplorerService.filterByMission(explorers, "java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(explorersNode.length).toBe(10);
        expect(explorersJava.length).toBe(5);
    });

    test("Read a document with method fucntion in class Reader", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const explorersJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(explorersNode).toBe(10);
        expect(explorersJava).toBe(5);
    });

    test("Read a document with method fucntion in class Reader", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        const explorersJava = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(explorersNode[0]).toBe("ajolonauta1");
        expect(explorersJava[0]).toBe("ajolonauta6");
    });

    test("Obtener los explorers apartir de un stack", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json");
        const stackJavascript = ExplorerService.getExplorersByStack(explorers, "javascript");
        const stackElm = ExplorerService.getExplorersByStack(explorers, "elm");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(stackJavascript.length).toBe(11);
        expect(stackElm.length).toBe(12);
    });

});
