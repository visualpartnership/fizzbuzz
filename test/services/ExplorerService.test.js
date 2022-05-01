const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Retornar todos los explorers que contengan cierta tecnologia" , () => {
        const explorers = [{stacks: ["javascript"]} ,{stacks: ["elixir"]} , {stacks: ["java"]} , {stacks: ["javascript"]} ];
        const explorersJavascriptInStack = ExplorerService.filterByTechology(explorers , "javascript");
        explorersJavascriptInStack.forEach( explorer => {
            expect(explorer.stacks).toContain("javascript");
        });
        expect(explorersJavascriptInStack.length).toEqual(2);
    });
});
