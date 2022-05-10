const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");


describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

});
describe("2 Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular el numero de explorers en la mision node", () =>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersNode).toBe(10);
    });
});
describe("3 Tests para ExplorerService", () => {
    test("Requerimiento 1: Obtener nombres de los explorers en Mission: Node", () =>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersNode).not.toBeUndefined;
    });
});