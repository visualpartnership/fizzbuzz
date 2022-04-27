const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("ExplorerController test", () => {
  test("Test 1, Filter for stack", () => {
    const stackList =
      ExplorerController.getExplorersUsernamesByStack("javascript");
    expect(stackList[0].name).toBe("Woopa2");
  });
});
