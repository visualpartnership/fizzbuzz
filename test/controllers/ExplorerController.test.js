const ExplorerController=require("./../../lib/controllers/ExplorerController.js");
describe("Test para ExplorerController",()=>{
    test("1. Obtener lista de los explorers que están en node",()=>{
        const explorersInNode=ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });

    test("2. Obtener la lista de usuarios de github de los explorers que están en node",()=>{
        const UsersExplorersInNode=ExplorerController.getExplorersUsernamesByMission("node");
        expect(UsersExplorersInNode.length).toBe(10);
    });

    test("3. Calcular el número de explorers que están en node",()=>{
        const numberExplorersInNode=ExplorerController.getExplorersAmonutByMission("node");
        expect(numberExplorersInNode).toBe(10);
    });

    test("Obtener todos los explorers con un stack determinado",()=>{
        const explorersByStack=ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack.length).toBe(11);
    });

});