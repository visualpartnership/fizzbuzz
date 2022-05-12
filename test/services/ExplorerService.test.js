const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
  test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
    const explorers = [{ mission: "node" }];
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.length).toBe(1);
  });
  test("Requerimiento exploradores filtrados por stack", () => {
    const explorers = [{ stack: "javascript" }];
    const explorersInJs = ExplorerService.filterByStackValue(
      explorers,
      "javascript"
    );
    expect(explorersInJs.length).toBe(1);
  });
});
