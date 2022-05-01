const Reader = require("./../../lib/utils/reader");

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mision", () => {
        const explorersRead = Reader.readJsonFile("explorers.json");
        expect(explorersRead.length).toBe(15);
    });
});