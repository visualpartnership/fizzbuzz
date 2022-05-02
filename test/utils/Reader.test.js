const Reader = require("../../lib/utils/Reader");

describe("Test para el Reader", () => {
    test("Test 1. Probando el Reader", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerInNode = explorers.filter((explorer) => explorer.mission === "node");
        expect(explorerInNode.length).toBe(10);
    });
});