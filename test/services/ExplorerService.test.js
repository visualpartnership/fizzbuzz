const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Obtener la lista de explorer que incluyen en su stack el valor enviado", () => {
        const explorers = [
            {
              "name": "Woopa1",
              "githubUsername": "ajolonauta1",
              "score": 1,
              "mission": "node",
              "stacks": [
                "javascript",
                "reasonML",
                "elm"
              ]
            },
            {
              "name": "Woopa2",
              "githubUsername": "ajolonauta2",
              "score": 2,
              "mission": "node",
              "stacks": [
                "javascript",
                "groovy",
                "elm"
              ]
            }];
        const result = ExplorerService.getExplorersFilterByStack(explorers, "javascript");
        expect(result.length).toBe(2);
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    stacks: (expect.arrayContaining(["javascript"]))
                })
            ])
        );
    });
});
