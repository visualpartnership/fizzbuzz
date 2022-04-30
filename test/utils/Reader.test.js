const Reader = require("./../../lib/utils/Reader");

describe("Pruebas unitarias para el Reader", () => {
    test("Requerimiento 1: Contar los datos de muestra", () => {
        const explorers = Reader.readJsonFile("./test/data/explorers-test.json");
        expect(explorers.length).toBe(15);
    });
});