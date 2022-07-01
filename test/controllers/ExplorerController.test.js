
const ExplorerController = require("./../../lib/controllers/ExplorerController");
//CODE TO CONTRIBUTION OPEN SOURCE - VISUALPARTNERSHIP
describe("Requerimiento para ExplorerController", () => {
    test("Requerimiento OPEN SOURCE: Regrese toda la lista de explorers filtrados por un stack.", () => {


        //const resultController = ExplorerService.inStack(explorers, "javascript");
        expect(ExplorerController.getInStack("javascript")).not.toBeUndefined();
        expect(ExplorerController.getInStack("javascript").length).toBe(11);

    });
});
