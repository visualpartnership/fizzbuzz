const Reader = require("../../../lib/utils/reader");

describe("Unit Test for Reader Class", () => {
    test("Read a document with method fucntion in class Reader", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(explorers.length).toBe(15);
    });
});