const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Regresar todos los explorers que tengan en stack el valor recibido en la url", () => {
        const explorers = [{
            "stacks": [
              "javascript",
              "reasonML",
              "elm"
            ]
          },
          {
            "stacks": [
              "javascript",
              "groovy",
              "elm"
            ]
          }]
        let explorersWithStack = ExplorerService.filterByStack(explorers, "javascript")
        expect(explorersWithStack.length).toBe(2)
        explorersWithStack = ExplorerService.filterByStack(explorers, "reasonML")
        expect(explorersWithStack.length).toBe(1)
    })

});
