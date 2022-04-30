const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Explorers que tengan en stack el valor recibido", () => {
        const explorers = [ { "name": "Woopa1s", "githubUsername": "ajolonauta1", "score": 1, "mission": "node", "stacks": [ "javascript", "reasonML", "elm" ] }, { "name": "Woopa2", "githubUsername": "ajolonauta2", "score": 2, "mission": "node", "stacks": [ "javascript", "groovy", "elm" ] }, { "name": "Woopa3", "githubUsername": "ajolonauta3", "score": 3, "mission": "node", "stacks": [ "elixir", "groovy", "reasonML" ] }, { "name": "Woopa4", "githubUsername": "ajolonauta4", "mission": "node", "score": 4, "stacks": [ "javascript" ] }];
        const stack = "javascript"
        const explorersByStack = ExplorerService.filterByStack(explorers, stack);
        explorersByStack.forEach((explorer) => {
            expect(explorer.stacks).toEqual(
                expect.arrayContaining([stack]))
        });
        expect(explorersByStack[0].name).toBe("Woopa1");
        expect(explorersByStack[2].name).toBe("Woopa4");
    });

});
