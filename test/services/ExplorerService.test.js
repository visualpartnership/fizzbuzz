const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"},{mission : "java"},{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });
    test("Requerimiento 2: filtra por misión y retornar username", () => {
        const explorers = [{mission: "node", githubUsername: "user1"},
            {mission: "java", githubUsername : "user2"}, 
            {mission: "node", githubUsername: "user3"}];
        const result = ExplorerService.getExplorersUsernamesByMission(explorers,"node");
        expect(result).toEqual(["user1","user3"]);
    });

    test("Req 3: Fitra usuarios por stack",()=>{
        const explorers = [{stacks: ["node","html"], user: "user1"},
            {stacks: ["java","css"], user : "user2"}, 
            {stacks: ["node","html"], user: "user3"}];
        const result = ExplorerService.getExplorersByStack(explorers,"css");
        expect(result[0].user).toEqual("user2");
    });

});
