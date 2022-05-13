const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const explorers = Reader.readJsonFile("explorers.json");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

});


test("2.- Test for getExplorersUsernamesByStack", () => {
    const exploresUsernamesByStack = ExplorerService.getExplorersUsernamesByStack(explorers, "javascript");
    expect(exploresUsernamesByStack[0]).toBe("ajolonauta1");
});
