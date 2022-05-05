const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerService: Get explore by stack", () => {
    test("Requerimiento 1: Recibir los explorers que tienen un stack especifico", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInNode.length).toBe(11);
    });

});
