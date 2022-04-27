const Reader = require("../../lib/utils/reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
  test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
    const explorers = [{ mission: "node" }];
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.length).toBe(1);
  });

  test("Requerimiento 2: Open Source, Obtener los explorer dependiendo del stack", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersStack = ExplorerService.getExplorersUsernamesByStack(
      explorers,
      "groovy"
    );
    expect(explorersStack[0].name).toBe("Woopa1");
  });
});
