const ExplorerService = require("./../../lib/services/ExplorerService");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("4. Obtener filtro de los explorers con stacks javascript", () => {
        const filtradoPorMisionJavas = ExplorerController.getExplorersByStack("javascript");
        expect(filtradoPorMisionJavas).toStrictEqual([
            {
                name: "Woopa1",
                githubUsername: "ajolonauta1",
                score: 1,
                mission: "node",
                stacks: ["javascript", "reasonML", "elm"]
            },
            {
                name: "Woopa2",
                githubUsername: "ajolonauta2",
                score: 2,
                mission: "node",
                stacks: ["javascript", "groovy", "elm"]
            },
            {
                name: "Woopa4",
                githubUsername: "ajolonauta4",
                mission: "node",
                score: 4,
                stacks: ["javascript"]
            },
            {
                name: "Woopa5",
                githubUsername: "ajolonauta5",
                score: 5,
                mission: "node",
                stacks: ["javascript", "elixir", "elm"]
            },
            {
                name: "Woopa9",
                githubUsername: "ajolonauta9",
                score: 9,
                mission: "java",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"]
            },
            {
                name: "Woopa10",
                githubUsername: "ajolonauta10",
                score: 10,
                mission: "java",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"]
            },
            {
                name: "Woopa11",
                githubUsername: "ajolonauta11",
                score: 11,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"]
            },
            {
                name: "Woopa12",
                githubUsername: "ajolonauta12",
                score: 12,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"]
            },
            {
                name: "Woopa13",
                githubUsername: "ajolonauta13",
                score: 13,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"]
            },
            {
                name: "Woopa14",
                githubUsername: "ajolonauta14",
                score: 14,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"]
            },
            {
                name: "Woopa15",
                githubUsername: "ajolonauta15",
                score: 15,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"]
            }
        ]);
        //hay 11 Miembros con javascript.
    });
});
