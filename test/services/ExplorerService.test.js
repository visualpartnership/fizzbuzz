const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    
    test("Requerimiento 4: obtener todo los explorers en un stack", () => {
        const explorers = [
        {"nombre":'woopa1',"stack":'java'},
        {"nombre":'woopa2',"stack":'javascript'},
        {"nombre":'woopa3',"stack":'java'},
        {"nombre":'woopa4',"stack":'javascript'},
        {"nombre":'woopa5',"stack":'java'},
        {"nombre":'woopa6',"stack":'elixir'}
        ];
        const explorersWithStackJava = ExplorerService.filterByStack(explorers,'java');
        expect(explorersWithStackJava[0].stack).toBe('java');
    });
});
