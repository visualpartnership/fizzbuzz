const ExplorerController = require("./../../lib/controllers/ExplorerController");


describe("Test for Explorer Controllers", () => {

    test("Test to get Explorers By Mission", () => {
        const result = ExplorerController.getExplorersByMission("node");
        expect(result).toStrictEqual([{
            "githubUsername": "ajolonauta1",
            "mission": "node",
            "name": "Woopa1",
            "score": 1,
            "stacks": ["javascript", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta2",
            "mission": "node",
            "name": "Woopa2",
            "score": 2,
            "stacks": ["javascript", "groovy", "elm"]
        }, {
            "githubUsername": "ajolonauta3",
            "mission": "node",
            "name": "Woopa3",
            "score": 3,
            "stacks": ["elixir", "groovy", "reasonML"]
        }, {
            "githubUsername": "ajolonauta4",
            "mission": "node",
            "name": "Woopa4",
            "score": 4,
            "stacks": ["javascript"]
        }, {
            "githubUsername": "ajolonauta5",
            "mission": "node",
            "name": "Woopa5",
            "score": 5,
            "stacks": ["javascript", "elixir", "elm"]
        }, {
            "githubUsername": "ajolonauta11",
            "mission": "node",
            "name": "Woopa11",
            "score": 11,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta12",
            "mission": "node",
            "name": "Woopa12",
            "score": 12,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta13",
            "mission": "node",
            "name": "Woopa13",
            "score": 13,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta14",
            "mission": "node",
            "name": "Woopa14",
            "score": 14,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta15",
            "mission": "node",
            "name": "Woopa15",
            "score": 15,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }]);
    });

    test("Test to get Explorers Usernames By Mission", () => {
        const result = ExplorerController.getExplorersAmonutByMission("node");
        expect(result).toBe(10);
    });

    test(" Test to get Explorers Amonut By Mission", () => {
        const result = ExplorerController.getExplorersUsernamesByMission("node");
        expect(result).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });

    test("Test to get Explorers By Mission", () => {
        const result = ExplorerController.getExplorerWithStack("javascript");
        expect(result).toStrictEqual(
            [
                {
                    "githubUsername": "ajolonauta1",
                    "mission": "node",
                    "name": "Woopa1",
                    "score": 1,
                    "stacks":  [
                        "javascript",
                        "reasonML",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta2",
                    "mission": "node",
                    "name": "Woopa2",
                    "score": 2,
                    "stacks":  [
                        "javascript",
                        "groovy",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta4",
                    "mission": "node",
                    "name": "Woopa4",
                    "score": 4,
                    "stacks":  [
                        "javascript",
                    ],
                },
                {
                    "githubUsername": "ajolonauta5",
                    "mission": "node",
                    "name": "Woopa5",
                    "score": 5,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta9",
                    "mission": "java",
                    "name": "Woopa9",
                    "score": 9,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta10",
                    "mission": "java",
                    "name": "Woopa10",
                    "score": 10,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta11",
                    "mission": "node",
                    "name": "Woopa11",
                    "score": 11,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta12",
                    "mission": "node",
                    "name": "Woopa12",
                    "score": 12,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta13",
                    "mission": "node",
                    "name": "Woopa13",
                    "score": 13,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta14",
                    "mission": "node",
                    "name": "Woopa14",
                    "score": 14,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm",
                    ],
                },
                {
                    "githubUsername": "ajolonauta15",
                    "mission": "node",
                    "name": "Woopa15",
                    "score": 15,
                    "stacks":  [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm",
                    ],
                },
            ]
        );
    });

});

describe("Test for explorer controller FIZZBUZZ service", () => {
    test("Test 1 to apply Validation In a given number (1)", function () {
        const result = ExplorerController.applyFizzbuzz(1);
        expect(result).toBe(1);
    });

    test("Test 2 to apply Validation In a given number(3)", function () {
        const result = ExplorerController.applyFizzbuzz(3);
        expect(result).toBe("FIZZ");
    });

    test("Test 3 to apply Validation In a given number(5)", function () {
        const result = ExplorerController.applyFizzbuzz(5);
        expect(result).toBe("BUZZ");
    });

    test("Test 4 to apply Validation In a given number(15)", function () {
        const result = ExplorerController.applyFizzbuzz(15);
        expect(result).toBe("FIZZBUZZ");
    });

    test("Test 5 to apply Validation In a given number(90)", function () {
        const result = ExplorerController.applyFizzbuzz(90);
        expect(result).toBe("FIZZBUZZ");
    });
});