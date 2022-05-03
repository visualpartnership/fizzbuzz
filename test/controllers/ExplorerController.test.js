const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Creando controller para conectar la funcionalidad con el server", () => { 
    test("Método para obtener la lista de explorers filtrados por misión", () => { 
        const listaExplorersByMision = ExplorerController.getExplorersByMission("node");
        expect(listaExplorersByMision).toEqual([
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
            },
            {
                "name": "Woopa4",
                "githubUsername": "ajolonauta4",
                "mission": "node",
                "score": 4,
                "stacks": [
                    "javascript"
                ]
            },
            {
                "name": "Woopa5",
                "githubUsername": "ajolonauta5",
                "score": 5,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "elm"
                ]
            },
            {
                "name": "Woopa11",
                "githubUsername": "ajolonauta11",
                "score": 11,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa15",
                "githubUsername": "ajolonauta15",
                "score": 15,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]);
    });

    test("Método que regresa la lista de usernames de los explorers filtrados por la misión", () => { 
        const listExplorersUsername = ExplorerController.getExplorersUsernamesByMission("node");

        expect(listExplorersUsername).toEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });

    test("Método que regresa la cantidad de explorers en la misión enviada", () => { 
        const amountExplorersInMission =  ExplorerController.getExplorersAmounttByMission("node");

        expect(amountExplorersInMission).toBe(10);
    });

    test("Metodo que solo recibe un numero y devuelve un valor ya sea FIZZBUZZ, FIZZ, BUZZ, O NUMERO dependiendo la condicion", () => { 
        const valor = ExplorerController.getValidationNumber(4);

        expect(valor).toBe(4);
    });

    test("Método para obtener la lista de explorers filtrados por stack", () => { 
        const explorersInStack = ExplorerController.getExplorersfilterByStack("javascript");

        expect(explorersInStack).toEqual([
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
                "name": "Woopa4",
                "githubUsername": "ajolonauta4",
                "mission": "node",
                "score": 4,
                "stacks": [
                    "javascript"
                ]
            },
            {
                "name": "Woopa5",
                "githubUsername": "ajolonauta5",
                "score": 5,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "elm"
                ]
            },
            {
                "name": "Woopa9",
                "githubUsername": "ajolonauta9",
                "score": 9,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa10",
                "githubUsername": "ajolonauta10",
                "score": 10,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa11",
                "githubUsername": "ajolonauta11",
                "score": 11,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa15",
                "githubUsername": "ajolonauta15",
                "score": 15,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]);
    });

});