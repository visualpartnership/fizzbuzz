const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader=require("./../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 2: Calcular todos los explorers en una misión", () => {
        const explorers=
            [
                {
                    "name": "Woopa1",
                    "githubUsername": "ajolonauta1",
                    "score": 1,
                    "mission": "node",
                    "stacks": "javascript"
                },
                {
                    "name": "Woopa2",
                    "githubUsername": "ajolonauta2",
                    "score": 2,
                    "mission": "node",
                    "stacks": [
                        "groovy",
                        "elm"
                    ]
                },
            ];

        const result=[{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": "javascript"
        }];
        const explorer=ExplorerService.getExplorersStackByMission(explorers,"javascript");
        expect(explorer).toStrictEqual(result);
    });

});
