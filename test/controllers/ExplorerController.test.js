const Reader = require("../../lib/utils/reader");
const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Test for Explorer Controller", () => {
    
    test("Get explorers by stack", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByStackT = [];
        explorers.forEach(element => {
            if (element.stacks.includes("javascript")){
                explorersByStackT.push(element);
            } 
        });
        const explorersByStack = ExplorerController.getExplorersByStack(
            "javascript",
        );
        expect(explorersByStack).toStrictEqual(explorersByStackT);
    });
});