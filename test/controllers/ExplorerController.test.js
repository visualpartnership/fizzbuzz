const ExplorerController = require ("../../lib/controllers/ExplorerController");

describe ("Tests's suite for Explorer Controller", () => {
    test ("1) Getting a list of explorers in Node", () => {
        const getExplorers = ExplorerController.getExplorersByMission ("node");
        expect (getExplorers.length).toBe (10);
    });

    test ("2) Testing fizzBuzz method", () => {
        const getFizzbuzzResultDivByThree = ExplorerController.applyFizzbuzz (6),
            getFizzbuzzResultDivByFive = ExplorerController.applyFizzbuzz (10),
            getFizzbuzzResultDivByThreeAndFive = ExplorerController.applyFizzbuzz (30),
            getFizzbuzzResultNonDiv = ExplorerController.applyFizzbuzz (14);

        expect (getFizzbuzzResultDivByThree).toBe ("FIZZ");
        expect (getFizzbuzzResultDivByFive).toBe ("BUZZ");
        expect (getFizzbuzzResultDivByThreeAndFive).toBe ("FIZZBUZZ");
        expect (getFizzbuzzResultNonDiv).toBe (14);
    });

    test ("3) Testing getExplorersUsernamesByMission method", () => {
        const getExplorersUsernamesInJava = ExplorerController.getExplorersUsernamesByMission ("java"),
            getExplorersUsernamesInNode = ExplorerController.getExplorersUsernamesByMission ("node"),
            expectedJava = ["ajolonauta6", "ajolonauta7", "ajolonauta8", "ajolonauta9", "ajolonauta10"],
            expectedNode = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"];

        expect (getExplorersUsernamesInJava).toEqual (expect.arrayContaining (expectedJava));
        expect (getExplorersUsernamesInNode).toEqual (expect.arrayContaining (expectedNode));
    });

    test ("4) Testing getExplorersAmonutByMission method", () => {
        const explorersAmountInNode = ExplorerController.getExplorersAmonutByMission ("node"),
            explorersAmountInJava = ExplorerController.getExplorersAmonutByMission ("java");

        expect (explorersAmountInNode).toBe (10);
        expect (explorersAmountInJava).toBe (5);
    });

    test ("5) Testing getExplorersByStack method", () => {
        const explorersByJavaScriptStack = ExplorerController.getExplorersByStack ("javascript"),
            expected = [
                { "name": "Woopa1", "githubUsername": "ajolonauta1", "score": 1, "mission": "node", 
                    "stacks": [ "javascript", "reasonML", "elm"] },
                { "name": "Woopa2", "githubUsername": "ajolonauta2", "score": 2, "mission": "node", 
                    "stacks": [ "javascript", "groovy", "elm"] },
                { "name": "Woopa4", "githubUsername": "ajolonauta4", "mission": "node", "score": 4, 
                    "stacks": [ "javascript"] },
                { "name": "Woopa5", "githubUsername": "ajolonauta5", "score": 5, "mission": "node", 
                    "stacks": [ "javascript", "elixir", "elm" ] },
                { "name": "Woopa9", "githubUsername": "ajolonauta9", "score": 9, "mission": "java", 
                    "stacks": [ "javascript", "elixir", "groovy", "reasonML", "elm" ]},
                { "name": "Woopa10", "githubUsername": "ajolonauta10", "score": 10, "mission": "java","stacks": [ "javascript", "elixir", "groovy", "reasonML", "elm" ]},
                { "name": "Woopa11", "githubUsername": "ajolonauta11", "score": 11, "mission": "node","stacks": [ "javascript", "elixir", "groovy", "reasonML", "elm" ]},
                { "name": "Woopa12", "githubUsername": "ajolonauta12", "score": 12, "mission": "node","stacks": [ "javascript", "elixir", "groovy", "reasonML", "elm" ]},
                { "name": "Woopa13", "githubUsername": "ajolonauta13", "score": 13, "mission": "node","stacks": [ "javascript", "elixir", "groovy", "reasonML", "elm" ]},
                { "name": "Woopa14", "githubUsername": "ajolonauta14", "score": 14, "mission": "node","stacks": [ "javascript", "elixir", "groovy", "reasonML", "elm" ]},
                { "name": "Woopa15", "githubUsername": "ajolonauta15", "score": 15, "mission": "node",      "stacks": [ "javascript", "elixir", "groovy", "reasonML", "elm" ]}
            ];

        expect (explorersByJavaScriptStack).toEqual (expect.arrayContaining (expected));
    });
});