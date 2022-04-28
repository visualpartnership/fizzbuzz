const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Calcular el número de explorers que están en node",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}];
        const numberExplorersInNode=ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(numberExplorersInNode).toBe(2);
    });

    test("Requerimiento 3: Obtener la lista de usuarios de github de los explorers que están en node",()=>{
        const explorers=[{githubUsername: "ajolonauta1",mission:"node"},{githubUsername: "ajolonauta2",mission:"node"},{githubUsername: "ajolonauta3",mission:"java"}];
        const UsersExplorersInNode=ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(UsersExplorersInNode.length).toBe(2);
    });

    test("Requerimiento: Obtener todos los explorers con un stack determinado", () => {
        const explorers = [{githubUsername: "ajolonauta1",stacks: ["elm","javascript"]},{githubUsername: "ajolonauta2",stacks: ["javascript","elixir"]}];
        const explorersByStack=ExplorerService.filterByStack(explorers,"javascript");
        expect(explorersByStack.length).toBe(2);
    });

});
