const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento extra: Mostrar explorers filtrados por stack javascript", () => {
        const explorersWithStackJavascript = ExplorerController.getExplorersListByStack("javascript");
        expect(explorersWithStackJavascript.length).toBe(11);
        expect(explorersWithStackJavascript[2].name).toBe("Woopa4");
        expect(explorersWithStackJavascript[2].stacks).toEqual(["javascript"]);
    });

    test("Requerimiento extra: Mostrar explorers filtrados por stack vacio", () => {
        const explorersWithStackJavascript = ExplorerController.getExplorersListByStack("");
        expect(explorersWithStackJavascript.length).toBe(0);
    });
});
