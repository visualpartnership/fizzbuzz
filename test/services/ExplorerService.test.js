const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento extra: Mostrar explorers filtrados por un stack", () => {
        const explorers = [
            {name: "Woopa1", stacks: ["javascript", "groovy", "elm"]}, 
            {name: "Woopa2", stacks: ["java", "groovy", "elm"]}, 
            {name: "Woopa3", stacks: ["javascript", "groovy", "elm"]}
            ];
        const explorersInJavascript = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInJavascript.length).toEqual(2);
        expect(explorersInJavascript).toEqual([{name: "Woopa1", stacks: ["javascript", "groovy", "elm"]},
            {name: "Woopa3", stacks: ["javascript", "groovy", "elm"]}]);
    });
});
