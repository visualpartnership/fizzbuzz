const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    
    test("Requerimiento 4: obtener todo los explorers en un stack", () => {
        const explorers = [
        {"nombre":'woopa1',"stacks":['java','elixir','python']},
        {"nombre":'woopa2',"stacks":['javascript','golang','ruby']},
        {"nombre":'woopa3',"stacks":['java','elixir','python']},
        {"nombre":'woopa4',"stacks":['javascript','golang','ruby']},
        {"nombre":'woopa5',"stacks":['java','elixir','python']},
        {"nombre":'woopa6',"stacks":['javascript','golang','ruby']}
        ];
        const explorersWithStackJava = ExplorerService.filterByStack(explorers,'java');
        expect(explorersWithStackJava[0].stacks[0]).toBe('java');
    });
});
