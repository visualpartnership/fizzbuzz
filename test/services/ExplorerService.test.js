const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Obtener todos los explorers con cierto stack", () => {
        const explorers = [{name: "explorer1", stack: "java"}, {name: "explorer2", stack:"javascript"}, {name: "explorer3", stack: "java"}];
        const explorersInJava = ExplorerService.filterByStack(explorers, "java");
        expect(explorersInJava).toEqual([{name: "explorer1", stack:"java"}, {name: "explorer3", stack: "java"}]);
    });
});
