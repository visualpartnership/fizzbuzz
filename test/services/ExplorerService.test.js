const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("2.1) FilterByStack invalid params", () => {
        const res = ExplorerService.filterByStack({}, "node");
        expect(res).toMatch(/explorers should be an array/);
    });
    test("2.2) FilterByStack empty array", () => {
        const res = ExplorerService.filterByStack([], "java");
        expect(res).toMatch(/explorers cannot be an empty array/);
    });
    test("2.3) FilterByStack invalid params", () => {
        const explorers = [{stacks: ["node"]}];
        const res = ExplorerService.filterByStack(explorers, 1);
        console.log(res)
        expect(res).toMatch(/stack should be a string/);
    });
    test("2.4) FilterByStack invalid mission", () => {
        const explorers = [{stacks: ["node"]}];
        const res = ExplorerService.filterByStack(explorers, "");
        expect(res).toMatch(/invalid stack/);
    });
    test("2.5) FilterByStack correct params ", () => {
        const explorers = [
            {stacks: [
                "javascript",
                "reasonML",
                "elm"
            ]},
            {stacks: [
                "javascript",
                "elm"
            ],
            stacks: [
                "javascript",
                "groovy",
            ]}
        ];
        const explorersInNode = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInNode.length).toBe(2);
    });
});
