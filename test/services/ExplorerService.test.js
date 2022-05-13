const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obtener los explorer que tengan en stack el valor recibido", () =>{
        const explorers = [{name: "Woopa1", stacks:["javascript", "reasonML", "elm"]},
            {name: "Woopa2", stacks:["javascript", "groovy", "elm"]},
            {name: "Woopa3", stacks:[ "elixir", "groovy", "reasonML"]}];
        const explorersWithStack = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersWithStack.length).toBe(2);
    });

});
