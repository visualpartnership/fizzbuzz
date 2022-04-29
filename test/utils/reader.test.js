const Reader = require("./../../lib/utils/reader");


describe("Tests Para Reader", () => {

    test("Requerimiento Test para Json", () => {
        const explorersInNode = Reader.readJsonFile("explorers.json");
        expect(explorersInNode.length).toBe(15);
    });
});