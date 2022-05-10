const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Retornar los explorers que tengan javascript en su stack", () => {
        const explorersInJS = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInJS.length).toBe(11);
    });
});
