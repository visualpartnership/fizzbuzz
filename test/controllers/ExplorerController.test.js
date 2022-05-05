const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Obtener explorers por stack", () => {
        const name = "javascript";
        const explorersWithStack = ExplorerController.getExplorersWithStack(name);
        expect(explorersWithStack.length).toBe(11);
    });

    test("Requerimiento 2: Bot. Obtener explorers por mision (inexistente)", () => {
        const mision = "sdfsdfsdfs";
        const explorersWithStack = ExplorerController.botExplorersByMission(mision);
        expect(explorersWithStack).toBe("");
    });

    test("Requerimiento 2: Bot. Obtener explorers por mision (válida)", () => {
        const mision = "node";
        const explorersWithStack = ExplorerController.botExplorersByMission(mision);
        expect(explorersWithStack).toContain("Woopa12");
    });
});
