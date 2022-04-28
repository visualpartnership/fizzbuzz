const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test Explorer Controller ", () => {
    test("1.- Open source requerimiento 4", () => {
        const list_Stack = ExplorerController.getListByStack("javascript");
        expect(list_Stack[0].name).toBe("Woopa1");
        expect(list_Stack[1].name).toBe("Woopa2");
        expect(list_Stack[2].name).toBe("Woopa4");
    });
});