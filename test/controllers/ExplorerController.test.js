const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 2: Explorers que tengan en stack el valor recibido", () => {
        const explorers = [ { "name": "Woopa1", "githubUsername": "ajolonauta1", "score": 1, "mission": "node", "stacks": [ "javascript", "reasonML", "elm" ] }, { "name": "Woopa2", "githubUsername": "ajolonauta2", "score": 2, "mission": "node", "stacks": [ "javascript", "groovy", "elm" ] }, { "name": "Woopa3", "githubUsername": "ajolonauta3", "score": 3, "mission": "node", "stacks": [ "elixir", "groovy", "reasonML" ] }, { "name": "Woopa4", "githubUsername": "ajolonauta4", "mission": "node", "score": 4, "stacks": [ "javascript" ] }];
        const stack = "javascript"
        const explorersByStack = ExplorerController.getExplorersByStack(explorers, stack);
        explorersByStack.forEach((explorer) => {
            expect(explorer.stacks).toEqual(
                expect.arrayContaining([stack]))
        });
        expect(explorersByStack.length).toBe(3);
    });

});