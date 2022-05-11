const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader= require("../../lib/utils/reader");

describe("Tests para ExplorerService", () => {
    test("1. prueba de reader", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).not.toBeUndefined();
    });
    test("2. calcular todos los explorers en una misión", () => {
        const explorers = [{"name": "explorer1","githubUsername": "ajolonauta1","score": 1,"mission": "node"},{"name": "explorer2","githubUsername": "ajolonauta2","score": 1,"mission": "java"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,"node");
        expect(explorersInNode).toBe(1);
    });
    test("3. Comparar si los explorers son de node",() => {
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInNode = ExplorerService.filterByMission(explorers, "node");
        expect(usernamesInNode[0].mission).toBe("node");
        expect(usernamesInNode[4].mission).toBe("node");
        expect(usernamesInNode[9].mission).toBe("node");
    });
    test("4. retorno de usernames correctos", () => {
        const explorers = [{"name": "explorer1", "githubUsername":"ajolonauta1", "score":1,"mission": "node"},{"name": "explorer2", "githubUsername":"ajolonauta2", "score":5, "mission": "java"},{"name": "explorer3", "githubUsername":"ajolonauta3", "score":12,"mission": "node"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        console.log(explorersInNode);
        expect(explorersInNode).toContain("ajolonauta1");
        expect(explorersInNode).toContain("ajolonauta3");

    });
    test("5 : Muestra a los explores en un stack", () => {
        const explorer = [{"stacks":"javascript"}];
        const explorersInNode = ExplorerService.filterByStack(explorer, "javascript");
        expect(explorersInNode).toContainEqual({"stacks":"javascript"})
    });

});
