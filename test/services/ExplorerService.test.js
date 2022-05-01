const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Calcular todos los explorers en la mision java", () => {
        const explorers = [{mission: "java"}];
        const explorersInJava = ExplorerService.filterByMission(explorers, "java");
        expect(explorersInJava.length).toBe(1);
    });

    test("Requerimiento 3: Obtener los usuarios de los explorers de una mision especifica", () => {
        const explorers = [{githubUsername: "ajolonauta1", mission: "node"}];
        const usersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usersInNode).toStrictEqual(["ajolonauta1"]);
    });

    test("Requerimiento 4: Obtener la cantidad de explorers en la mision node", () => {
        const explorers = [{githubUsername: "ajolonauta1", mission: "node"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1);
    });

    test("Requerimiento 5: Obtener la cantidad de explorers en la mision java", () => {
        const explorers = [{githubUsername: "ajolonauta1", mission: "java"}];
        const explorersInJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(explorersInJava).toBe(1);
    });
});
