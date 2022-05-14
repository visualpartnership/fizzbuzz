const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Nuevo Requerimiento: devolver todos los explorers con el stack javascript", () => {
        const explorers = [{stacks: ["java", "ruby", "javascript"]}, {stacks: ["java", "ruby", "python"]}, {stacks: ["ruby", "rails"]}];
        const explorersJS = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersJS.length).toBe(1);
    });

});
