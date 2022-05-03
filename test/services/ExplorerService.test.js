const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Class ExplorerService: 3 Métodos estaticos y obtener informacion", () => { 
    

    test("Método static filterByMission: filtarr por misión node", () => {         
        const explorers = Reader.readJsonFile("./test/explorersTest.json");
        const explorersInNode =  ExplorerService.filterByMssion(explorers, "node");

        expect(explorersInNode).toEqual([
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
            }
        ]);
    });

    test("Método stati getAmountOfExplorersByMission: Obtener la cantidad de explorers por misión node ", () => {
        const explorers = Reader.readJsonFile("./test/explorersTest.json");
        const explorerCansInNode =  ExplorerService.getAmountOfExplorersByMission(explorers, "node");
      
        expect(explorerCansInNode).toBe(5);
    });

    test("Método: Obtener la lista de usuarios de githug de los explores que estoan en node", () => { 
        const explorers = Reader.readJsonFile("./test/explorersTest.json");
        const explorerGithubInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(explorerGithubInNode).toEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5"]);
    });

    test("Método que regresa los explorer que tiene stack javascript", () => { 
        const explorers = Reader.readJsonFile("./test/explorersTest.json");
        const explorersInStackJavascript = ExplorerService.filterByStack(explorers, "javascript");

        expect(explorersInStackJavascript).toEqual([{
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
        }
        ]);
    });

});