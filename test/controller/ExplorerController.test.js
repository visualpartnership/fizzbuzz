const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("getExplorerByStack function returns a list of explorers that contain into its property stacks the stack value passed", () => {
        //arrange and acts
        const explorersJS = ExplorerController.getExplorerByStack("javascript");
        //asserts
        for(let i = 0; i < explorersJS.length; i++){
            expect(explorersJS[i].stacks.includes("javascript")).toBeTruthy();
        }
    });
});