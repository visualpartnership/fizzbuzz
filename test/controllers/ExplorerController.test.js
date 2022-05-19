const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerService class", () => {
    test("1) Use the method getExplorersByMission()", () => {
        const explorersInNodeMission = ExplorerController.getExplorersByMission("node");

        explorersInNodeMission.forEach(explorer => {
            expect(explorer.mission).toBe("node");
        });
    });

    test("2) Use the method getExplorersUsernamesByMission()jet", () => {
        const explorersInNodeMission = ExplorerController.getExplorersUsernamesByMission("node");

        expect(explorersInNodeMission).toEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5",
            "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });

    test("3) Use the method getExplorersAmonutByMission()", () => {
        const explorersInNodeMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInNodeMission).toEqual(10);
    });

    test("4) Use the method getValidationInNumber()", () => {
        expect(ExplorerController.applyFizzbuzz(1)).toEqual(1);
        expect(ExplorerController.applyFizzbuzz(3)).toBe("FIZZ");
        expect(ExplorerController.applyFizzbuzz(5)).toBe("BUZZ");
        expect(ExplorerController.applyFizzbuzz(15)).toBe("FIZZBUZZ");


    });
    test("Requerimiento 4: Lista de explorers filtrados por un stack", () => {
        const explorersListWithJsStack = ExplorerController.getExplorersByStack("javascript");

        expect(explorersListWithJsStack).toHaveLength(11);
        expect(explorersListWithJsStack[0].stacks).toEqual(expect.arrayContaining(["javascript"]));
        expect(explorersListWithJsStack[1].stacks).toEqual(expect.arrayContaining(["javascript"]));
    });
    
});