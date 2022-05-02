const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Testing de getExplorersByStacks method", () => { 
    test("testing getExplorersByStack method", () => {
        const explorersInNode = ExplorerController.getExplorersByStacks("elm");
        expect(explorersInNode).toStrictEqual([
            {"name":"Woopa1","githubUsername":"ajolonauta1","score":1,"mission":"node","stacks":["javascript","reasonML","elm"]},{"name":"Woopa2","githubUsername":"ajolonauta2","score":2,"mission":"node","stacks":["javascript","groovy","elm"]},{"name":"Woopa5","githubUsername":"ajolonauta5","score":5,"mission":"node","stacks":["javascript","elixir","elm"]},{"name":"Woopa6","githubUsername":"ajolonauta6","score":6,"mission":"java","stacks":["elm"]},{"name":"Woopa8","githubUsername":"ajolonauta8","score":8,"mission":"java","stacks":["elm"]},{"name":"Woopa9","githubUsername":"ajolonauta9","score":9,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa10","githubUsername":"ajolonauta10","score":10,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa11","githubUsername":"ajolonauta11","score":11,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa12","githubUsername":"ajolonauta12","score":12,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa13","githubUsername":"ajolonauta13","score":13,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa14","githubUsername":"ajolonauta14","score":14,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa15","githubUsername":"ajolonauta15","score":15,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]}
        ]);
    });

});