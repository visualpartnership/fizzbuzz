const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 4: Filtrando por stack dado un stack vacío", () => {
        const explorers = require("./explorers_prueba.json");
        const explorersByStack1 = ExplorerService.filterExplorersByStack(explorers, "");
        const explorersByStack2 = ExplorerService.filterExplorersByStack(explorers, [""]);
        const explorersByStack3 = ExplorerService.filterExplorersByStack(explorers, []);

        expect(explorersByStack1).toEqual([]);
        expect(explorersByStack2).toEqual([]);
        expect(explorersByStack3).toEqual([]);
    });

    test("Requerimiento 4: Filtrando por stack dado un stack no contenido", () => {
        const explorers = require("./explorers_prueba.json");
        const explorersByStack = ExplorerService.filterExplorersByStack(explorers, "django");

        expect(explorersByStack).toEqual([]);
    });

    test("Requerimiento 4: Filtrando por stack sin stack recibido", () => {
        const explorers = require("./explorers_prueba.json");
        const explorersByStack = ExplorerService.filterExplorersByStack(explorers, );

        expect(explorersByStack).toEqual([]);
    });

    test("Requerimiento 4: Filtrando por stack", () => {
        const explorers = require("./explorers_prueba.json");
        const explorersByStack = ExplorerService.filterExplorersByStack(explorers, "javascript");

        expect(explorersByStack.length).toBe(6);
    });
});
