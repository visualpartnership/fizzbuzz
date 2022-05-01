const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Prueba de unidad para el metodo de filtrado por stack",()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        explorersInStack = ExplorerService.getExplorersByStack(explorers,"javascript");
        expect(explorersInNode.length).toBe(11);
    })

});
