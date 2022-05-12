const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test ("For getExplorersByStack function que filtra explorers dependieno de la stack",()=>{
        const explorers = [{stacks: [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"] 
        },
        {stacks: [
            "elixir",
            "groovy",
            "reasonML",
            "elm"] 
        }
        ];
        const explorersInNode = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInNode.length).toBe(1);
    });

});
