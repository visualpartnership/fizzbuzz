const Reader = require("./../../lib/utils/reader");

describe("Pruebas unitarias para el Reader", () => {
    test("Requerimiento 1: Contar los datos de muestra", () => {
        const explorers = Reader.readJsonFile("./test/data/explorers.json");
        expect(explorers.length).toBe(15);
    });
});