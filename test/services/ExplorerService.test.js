const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    
    test("Requerimiento 2: Obtener todos los explorers de un Stack", () => {
        const explorers = [
            {"name": "Woopa1","stacks": ["reasonML","elm"]},
            {"name": "Woopa2","stacks": ["javascript","groovy"]}]

        const explorersInJS = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInJS).toStrictEqual( [{"name": "Woopa2","stacks": ["javascript","groovy"]}]);
    });

});
