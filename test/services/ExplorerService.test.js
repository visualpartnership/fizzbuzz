const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    //CODE TO CONTRIBUTION OPEN SOURCE - VISUALPARTNERSHIP
    test("Requerimiento OPEN SOURCE: regrese toda la lista de explorers filtrados por un stack.", () => {
        const explorers =
[
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
    },
    {
        "name": "Woopa3",
        "githubUsername": "ajolonauta3",
        "score": 3,
        "mission": "node",
        "stacks": [
            "elixir",
            "groovy",
            "reasonML"
        ]
    }
];




        const explorersLanguage = ExplorerService.inStack(explorers, "javascript");
        expect(explorersLanguage).not.toBeUndefined();
        expect(explorersLanguage.length).toBe(2);
        expect(explorersLanguage).toContain("Woopa1");
        expect(explorersLanguage).toContain("Woopa2");
    });



});
