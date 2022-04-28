const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Tets de Requerimiento 4 open source, obtener lista de explorers por stack", () => {

        const explorers = Reader.readJsonFile("explorers.json");
        const explorersStack = ExplorerService.getExplorersListByStack(explorers,"javascript");
        expect(explorersStack[0].name).toBe("Woopa1");
        expect(explorersStack[1].name).toBe("Woopa2");
        expect(explorersStack[2].name).toBe("Woopa3");
    });


});
