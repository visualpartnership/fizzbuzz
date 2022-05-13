const ExplorerService = require ("./../../lib/services/ExplorerService");

describe ("Tests para ExplorerService", () => {
    test ("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}], 
            explorersInNode = ExplorerService.filterByMission (explorers, "node");
        expect (explorersInNode.length).toBe (2);
    });

    test ("Requerimiento 2: Verificar que todos los exṕlorers se encuentren en una misma misión", () => {
        const explorers = [{mission: "java"}, {mission: "java"}, {mission: "java"}],
            explorersInJava = ExplorerService.getAmountOfExplorersByMission (explorers, "java");
        expect (explorersInJava) . toBe (3);
    });

    test ("Requerimiento 3: Verificar que se regrese una lista de explorers filtrados por username", () => {
        const explorers = [{mission: "node", githubUsername: "ajolonauta1"}, 
                {mission: "node", githubUsername: "ajolonauta5"}, 
                {mission: "node", githubUsername: "ajolonauta12"}],
            expected = ["ajolonauta1", "ajolonauta5", "ajolonauta12"],
            nodeExplorersUsernames = ExplorerService.getExplorersUsernamesByMission (explorers, "node");
        expect (nodeExplorersUsernames).toEqual (expect.arrayContaining (expected));
    });

    //Contribución
    test ("Requerimiento de contribución: comprobar que se regrese una lista filtrada por stack", () => {
        const explorers = [{"stacks" : ["javascript", "reasonML", "elm"]}, 
                {"stacks" : ["javascript", "groovy", "elm"]}, 
                {"stacks" : ["elixir", "groovy", "reasonML"]}],
            expected = [{"stacks" : ["javascript", "reasonML", "elm"]}, 
                {"stacks" : ["javascript", "groovy", "elm"]}],
            explorersWithStackJS = ExplorerService.getExplorersByStack (explorers, "javascript");
        expect (explorersWithStackJS).toEqual (expect.arrayContaining (expected));
    });

});
