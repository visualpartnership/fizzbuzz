const ExplorerController = require("./../../lib/controllers/ExplorerController");
describe("Test para ExplorerController", () => {
  test("1) Filtrar por stack", () => {
    const respuesta = ExplorerController.getExplorersByStack("javascript");
    expect(respuesta[0]).toMatch("javascript");
  });
});
