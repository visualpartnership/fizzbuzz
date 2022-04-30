const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerSController", () => {
    test("Obtener explorers por Javascript", () => {
        const explorersInJavascript = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInJavascript.length).toBe(11);
    });

    test("Obtener explorers por ReasonML", () => {
        const explorersInReasonML = ExplorerController.getExplorersByStack("reasonML");
        expect(explorersInReasonML.length).toBe(9);
    });

    test("Obtener explorers por Elm", () => {
        const explorersInElm = ExplorerController.getExplorersByStack("elm");
        expect(explorersInElm.length).toBe(12);
    });

    test("Obtener explorers por Groovy", () => {
        const explorersInGroovy = ExplorerController.getExplorersByStack("groovy");
        expect(explorersInGroovy.length).toBe(9);
    });

    test("Obtener explorers por Elixir", () => {
        const explorersInElixir = ExplorerController.getExplorersByStack("elixir");
        expect(explorersInElixir.length).toBe(9);
    });
});