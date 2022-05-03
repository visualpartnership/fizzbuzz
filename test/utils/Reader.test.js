const Reader = require("./../../lib/utils/Reader");


describe("Leer un archivo explorers.json", () => { 
    test("Obtener la lista de explorers", () => { 
        const path = "./test/explorersTest.json";
        const explorers = Reader.readJsonFile(path);
        expect(explorers[1].name).toEqual("Woopa2");
    });
});