const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");
describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento nuevo: Crea un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack", () => {

        const explorers = Reader.readJsonFile("explorers.json");
        const explorersStackJS = ExplorerService.getExplorersByStack(explorers,"javascript")
        const explorersStackGroovy = ExplorerService.getExplorersByStack(explorers,"groovy")
        const explorersStackElixir = ExplorerService.getExplorersByStack(explorers,"elixir")
        expect(explorersStackGroovy).toEqual(["ajolonauta2","ajolonauta3","ajolonauta9","ajolonauta10","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"]);
        expect(explorersStackJS).toEqual(["ajolonauta1","ajolonauta2","ajolonauta4","ajolonauta5","ajolonauta9","ajolonauta10","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"]);
        expect(explorersStackElixir).toEqual(["ajolonauta3","ajolonauta5","ajolonauta9","ajolonauta10","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"]);
    });

});
