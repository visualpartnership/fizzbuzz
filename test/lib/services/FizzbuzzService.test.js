const ExplorerService = require("../../../lib/services/ExplorerService");
const FizzbuzzService = require("../../../lib/services/FizzbuzzService");
const Reader = require("../../../lib/utils/reader");


describe("Unit Test for FizzbizzService Class", () => {
    test("Use class Fizzbuzz and determinate de new database field: ", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.filterByMission(explorers, "node");
        const explorersFizzbuzz = explorersNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(explorersFizzbuzz[2].trick).toBe("FIZZ");
    });
});