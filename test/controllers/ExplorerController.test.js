const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests in ExplorerController class", () => {

    test("1. getExplorerByStack must to return explorers given a stack", () => {

        const exploresByMission = ExplorerController.getExplorersByStack("javascript");
        const explorersValidate = exploresByMission.every(explorer => explorer.stacks.includes("javascript"));

        expect(explorersValidate).toBe(true);
    });
});