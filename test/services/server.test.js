const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/reader");
describe("Tests para Explorer service del metodo que se pidio  bystack", () => {
    test("Requerimiento obtener stack de usuarios", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerstack = ExplorerService.getexplorerstack(explorers,"javascript");
    
        expect(explorerstack[0].name).toBe("Woopa1");
    });

});