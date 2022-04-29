const ExplorerService = require("./../../lib/services/ExplorerService");


describe("Tests para ExplorerService", () => {

    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    
    test("Requerimiento 2 cantida de explorer",() =>{
        const explorers = [{mission: "node"}, {mission:"node"}];
        const explorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersByMission).toBe(2);
    });
     

    test("Requerimiento 3 por Usernames",()=>{
        const explorer = [{ mission: "node", githubUsername: "Ramiro" },{ mission: "node", githubUsername: "rzs"}];
        const ExplorerAmount = ExplorerService.getExplorersUsernamesByMission(explorer,"node");  
        expect(ExplorerAmount[0]).toBe("Ramiro");
    });

    test ("Requerimiento 4 por stack",()=>{
        const explorers = [{name:"ramiro",mission:"node", stacks:["javascript"]}];
        const explorerstack = ExplorerService.getexplorerstack(explorers, "javascript");
        expect(explorerstack[0].name).toBe("ramiro");
    });

});
