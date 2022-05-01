const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit test ExplorarController Class",()=>{

    test("evaluate getExplorersByStack method",()=>{
        const javascriptExplorers = ExplorerController.getExplorersByStack("javascript");
        expect(javascriptExplorers.length).toBe(11);
    });
});
