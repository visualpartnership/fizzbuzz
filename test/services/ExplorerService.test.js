const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("2.Requerimiento 2: Regresar lista de explorers filtrados por un stack",()=>{
        const explorers= [{"name": "Woopa1","stacks": ["javascript","reasonML"]},{"name": "Woopa2","stacks": ["javascript","groovy"]},{"name": "Woopa3","stacks": ["elixir",]}];
        const explorersByStack=ExplorerService.getExplorersByStack(explorers,"javascript");
        expect(explorersByStack).not.toBeUndefined();
    });
});
