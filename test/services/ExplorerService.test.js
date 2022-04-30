const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Obtener explorers en stack", () => {
        const explorers= [{stack: ["node","react"]},{stack: ["node","react","javascript"]}];
        const explorersInNode = ExplorerService.filterByStack(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    })
    test("Requerimiento 2.1: Obtener explorers en stack", () => {
        const explorers= [{stack: ["node","react"]},{stack: ["node","react","javascript"]}];
        const explorersInNode = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInNode.length).toBe(1);
    })
});
