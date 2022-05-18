const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test('Requerimiento 2: Mostrar todos los explorers por stack',()=>{
        const explorers = [{name:'ajolote1',stacks:['node','java']},{name:'ajolote2',stacks:['node','java']},{name:'ajolote3',stacks:'node'},{name:'ajolote4',stacks:'java'}];
        const explorerInNode = ExplorerService.filterByStack(explorers,'node');
        expect(explorerInNode).not.toBeUndefined()
    })

});
