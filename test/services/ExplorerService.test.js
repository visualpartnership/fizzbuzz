const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Nuevo Requerimiento: Obtener todos los explorers con el stack solicitado.", () =>{
        const explorers = [{stacks: ["javascript"]}];
        const filterstack = ExplorerService.getExplorerByStack(explorers, "javascript");
        expect(filterstack.length).toBe(1);
    });
});
