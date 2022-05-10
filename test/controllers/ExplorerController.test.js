const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for explorer controller file", () => {
    test("1) Test for getExplorerByMission not null", () => {
        const explorerByMission = ExplorerController.getExplorersByMission("node");
        expect(explorerByMission).not.toBeNull();        
    });
    test("2) Test for Explorers in mission Node", () => {
        const explorerByMissionLength = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorerByMissionLength).toBe(10);
    });
    test("3) Test for Username", () =>{
        const explorerUsername = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorerUsername).toContain("ajolonauta1");
    });
});