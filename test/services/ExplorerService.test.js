const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("4. Looks for stack", () => {
        const example = [{"githubUsername": "ajolonauta15","stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta14",  "stacks": ["elm"]}];
        const UsernameByStacks = ExplorerService.getExplorersStacks(example, "elixir");
        expect(UsernameByStacks[0]).toMatch(/ajolonauta15/);
    });

});
