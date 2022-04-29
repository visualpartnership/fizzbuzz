const ExplorerService = require("./../lib/services/ExplorerService");
const Reader = require("./../lib/utils/reader");

describe("Testing stack endpoint", () => {

    test("Obtain explorer if includes stack", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerstack = ExplorerService.getExplorersByStack(explorers, "javascript");

        expect(explorerstack[0].name).toBe("Woopa1");
    });

});