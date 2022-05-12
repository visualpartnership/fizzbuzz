const StackService = require("./../../lib/services/StackService.js");


describe("this test is for StackService requierement",() =>{

    test("1).- test one", () =>{

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
            },


        ];
        const testOne = StackService.getExplorersByStack(explorers,"javascript");
        expect(testOne.length).toBe(2);
    });

    test("2).- test one", () =>{

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
            },


        ];
        const testOne = StackService.getExplorersByStack(explorers,"reasonML");
        expect(testOne.length).toBe(1);
    });

    test("3).- test one", () =>{

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
            },


        ];
        const testOne = StackService.getExplorersByStack(explorers,"python");
        expect(testOne.length).toBe(0);
    });
    test("4).- test one", () =>{

        const explorers = [

            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
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


        ];
        const testOne = StackService.getExplorersByStack(explorers,"javascript");
        expect(testOne).toEqual(
            [{
                "name": "Woopa2",
                "githubUsername": "ajolonauta2",
                "score": 2,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "groovy",
                    "elm"
                ]
            }]
        );
    });
    test("5).- test one", () =>{

        const explorers = [

            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
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


        ];
        const testOne = StackService.getExplorersByStack(explorers,"javascript");
        const testOneStacks = testOne.map((mapper) => mapper.stacks);
        expect(testOneStacks).toEqual([["javascript","groovy","elm"]]);
    });



});