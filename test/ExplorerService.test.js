
const ExplorerService=require("../lib/services/ExplorerService");

describe("test  para explorer service",()=>{
    test("requerimiento 1 calcular todo los explorers" ,()=>{
        const explorer1 = {mission:"node"};
        const explorer2 = {mission:"node"}; 
        const explorer3 = {mission:"node"}; 
        const explorerInNode = ExplorerService.filterByMission([explorer1, explorer2, explorer3],"node");
        expect(explorerInNode.length).toBe(3);
    });
});
describe("test  para explorer service",()=>{
    test("Obtener Username" ,()=>{
        const explorer1 = {githubUsername:"ajolonauta1", mission: "node"}; 
        const explorerInNode = ExplorerService.getExplorersUsernamesByMission([explorer1],"node");
        expect(explorerInNode).toContain("ajolonauta1");
    });
});
