const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento PR: Regresa una lista de explorers con el stack solicitado", () => {
        const explorersWithStack = ExplorerController.getExplorersWithStack("elm");
        expect(explorersWithStack.length).toBe(12);
    });

});
