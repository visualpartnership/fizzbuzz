const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Obtener el stack del explorer", () =>{
        const explorer = {stack: [
            "javascript",
            "groovy",
            "elm"
        ]};
        expect(ExplorerService.getStack(explorer.stack)).toEqual([
            "javascript",
            "groovy",
            "elm"
        ]);
    });
});
