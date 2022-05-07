const ExplorerController = require("../../lib/controllers/ExplorerController");


describe("Unit Tests Explorer Controller ", () => {
    
    test("1) Explorers By Stack", () => {

    const explorersInNode = ExplorerController.getExplorersByStack("javascript");

    expect(explorersInNode.length).toBe(11);
  

});

});