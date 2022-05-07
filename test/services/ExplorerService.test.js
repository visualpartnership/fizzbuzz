const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Test para probar nueva funcionalidad=> todos los explorers que tengan en stack el valor recibido en la url: javascript", () =>{
        const explorers =[{name: "Woopa1", stacks: [ "javascript","reasonML","elm"]}, { name: "Woopa2",stacks: [ "javascript","groovy","elm" ]},
            {name: "Woopa3",stacks: ["elixir","groovy","reasonML" ]}];
        const explorersStack = ExplorerService.filterByStack(explorers,"javascript");
        expect(explorersStack.length).toBe(2);
    });

});


  