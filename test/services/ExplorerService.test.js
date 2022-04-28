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
        const explorers = [{"name": "Woopa1" ,"mission": "node"}];
        const res = ExplorerService.filterByStack(explorers, 1);
        expect(res).toMatch(/mission should be a string/);
    });
    test("2.4) FilterByStack invalid mission", () => {
        const explorers = [{"name": "Woopa1" ,"mission": "node"}];
        const res = ExplorerService.filterByStack(explorers, "");
        expect(res).toMatch(/invalid mission/);
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
                "node",
                "elm"
            ],
            stacks: [
                "javascript",
                "groovy",
                "node"
            ]}
        ];
        const explorersInNode = ExplorerService.filterByStack(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
});
