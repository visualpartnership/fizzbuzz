const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requirement 1: Get all explorers that have the same stack", () => {
        const explorersFilteredByStack_1 = ExplorerController.getExplorersFilteredByStack("javascript");
        const explorersFilteredByStack_2 = ExplorerController.getExplorersFilteredByStack("reasonML");
        const explorersFilteredByStack_3 = ExplorerController.getExplorersFilteredByStack("elm");
        const explorersFilteredByStack_4 = ExplorerController.getExplorersFilteredByStack("django");

        expect(explorersFilteredByStack_1).toHaveLength(11);
        expect(explorersFilteredByStack_2).toHaveLength(9);
        expect(explorersFilteredByStack_3).toHaveLength(12);
        expect(explorersFilteredByStack_4).toBe("No explorers found");
    });
});
