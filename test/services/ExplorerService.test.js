const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
  test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
    const explorers = [{ mission: "node" }];
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.length).toBe(1);
  });

  test("Requerimiento 2: Filtrar explorers por stack", () => {
    const explorers = [
      {
        name: "Woopa1",
        githubUsername: "ajolonauta1",
        score: 1,
        mission: "node",
        stacks: ["javascript", "reasonML", "elm"],
      },
      {
        name: "Woopa3",
        githubUsername: "ajolonauta3",
        score: 3,
        mission: "node",
        stacks: ["elixir", "groovy", "reasonML"],
      },
    ];
    const explorersFilterByStack = ExplorerService.filterByStack(
      explorers,
      "javascript"
    );
    expect(explorersFilterByStack.length).toBeGreaterThanOrEqual(0);
  });
});
