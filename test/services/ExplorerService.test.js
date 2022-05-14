const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento para buscar dentro de stacks ",()=>{
        const stack = "javaScript";
        const explorers = Reader.readJsonFile("explorers.json");
        const explorestWhithStak = ExplorerService.steack(explorers,stack)
        expect(explorestWhithStak).toBeDefined();
    });

});
