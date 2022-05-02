const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

});
describe("Test de ExplorerService", () => {
    test("Nombre de explorers por Stack", () =>{
        const nameExplorersByStack = ExplorerService.getExplorersByStack(explorers, "elm");
        expect(nameExplorersByStack).toContain("ajolonauta6");
    }); 
});
