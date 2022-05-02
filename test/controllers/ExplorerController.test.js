const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Prueba 1: Explorers by mission", () => {
        const testingExplorersByMission = ExplorerController.getExplorersByMission("node");
        const explorer1 = testingExplorersByMission[0].name;
        expect(explorer1).toBe("Woopa1");
    });
    test("Prueba 2: Explorers Usernames by mission", () => {
        const testingExplorersUsernameByMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(testingExplorersUsernameByMission).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });
    test("Prueba 3: Amount explorers by mission", () => {
        const testingAmountExplorersByMission = ExplorerController.getExplorersAmountByMission("node");
        expect(testingAmountExplorersByMission).toBe(10);
    });
    test("Prueba 4: Score and FizzBuzz", () => {
        const scoreFizzBuzz = ExplorerController.getTrickOfExplorerRequested(15);
        expect(scoreFizzBuzz).toBe("FIZZBUZZ");
    });
    test("Prueba 5: Explorers by stack", () => {
        const explorersByStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersByStack.length).toBe(11);
    });


});