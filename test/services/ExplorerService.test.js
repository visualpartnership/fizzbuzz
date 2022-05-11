const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Cantidad de explorers por mission",() =>{
        const explorers = [{mission: "node"},{mission: "node"},{mission: "node"},{mission: "java"},{mission: "java"},{mission: "java"},{mission: "java"}];
        const explorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersByMission).toBe(3);
    });
     
    test("Requerimiento 3 por Usernames",()=>{
        const explorers = [{mission: "node", githubUsername: "Testjolonauta1"},{mission: "node", githubUsername: "Testjolonauta2"},{mission: "node", githubUsername: "Testjolonauta3"},{mission: "java", githubUsername: "Testjolonauta4"},{mission: "java", githubUsername: "Testjolonauta5"},{mission: "java", githubUsername: "Testjolonauta6"},{mission: "java", githubUsername: "Testjolonauta7"}];
        const ExplorerAmount = ExplorerService.getExplorersUsernamesByMission(explorers,"node");  
        expect(ExplorerAmount[0]).toBe("Testjolonauta1");
    });

    test ("Requerimiento 4 por stack",()=>{
        const explorers = [{mission: "node", githubUsername: "Testjolonauta1", name: "Testjolonauta1", stacks:["javascript"]},{mission: "node", githubUsername: "Testjolonauta2", name: "Testjolonauta2", stacks:["javascript"]},{mission: "node", githubUsername: "Testjolonauta3", name: "Testjolonauta3", stacks:["typescript"]},{mission: "java", githubUsername: "Testjolonauta4", name: "Testjolonauta4" , stacks:["spring"]},{mission: "java", githubUsername: "Testjolonauta5", name: "Testjolonauta5", stacks:["spring"]},{mission: "java", githubUsername: "Testjolonauta6", name: "Testjolonauta6", stacks:["spring"]},{mission: "java", githubUsername: "Testjolonauta7", name: "Testjolonauta7", stacks:["spring"]}];
        const explorerstack = ExplorerService.getExplorerWithStack(explorers, "javascript");
        expect(explorerstack[0].name).toBe("Testjolonauta1");
    });

});
