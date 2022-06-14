const ExplorerController = require("./../../lib/controllers/ExplorerController");
const ExplorerService = require("./../../lib/services/ExplorerService");
describe("Test para ExplorerController", () => {
  test("1) Filtrar por stack", () => {
    const respuesta = ExplorerController.getExplorersByStack("javascript");
    // expect(respuesta[1]).toMatch("javascript");
    console.log(respuesta);
  });
});
