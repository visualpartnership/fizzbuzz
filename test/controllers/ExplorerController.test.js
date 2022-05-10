const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Devolver todos los explorers que tengan un valor específico en su campo stacks solo recibiendo el parámetro del stack", () => {
        
        const explorersJavascriptInStacks = ExplorerController.getExplorersByStack("javascript");
        expect(explorersJavascriptInStacks[0].stacks).toMatchObject(["javascript", "reasonML", "elm"]);
    });
});