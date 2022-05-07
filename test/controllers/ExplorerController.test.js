// GitHub: @AleGV258

const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController class", () => {
    test("ExplorerController by Stack", () => {
        const explorerStack = ExplorerController.getExplorerByStack("javascript");
        expect(explorerStack).toEqual([{"name":"Woopa1","githubUsername":"ajolonauta1","score":1,"mission":"node","stacks":["javascript","reasonML","elm"]},{"name":"Woopa2","githubUsername":"ajolonauta2","score":2,"mission":"node","stacks":["javascript","groovy","elm"]},{"name":"Woopa4","githubUsername":"ajolonauta4","mission":"node","score":4,"stacks":["javascript"]},{"name":"Woopa5","githubUsername":"ajolonauta5","score":5,"mission":"node","stacks":["javascript","elixir","elm"]},{"name":"Woopa9","githubUsername":"ajolonauta9","score":9,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa10","githubUsername":"ajolonauta10","score":10,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa11","githubUsername":"ajolonauta11","score":11,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa12","githubUsername":"ajolonauta12","score":12,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa13","githubUsername":"ajolonauta13","score":13,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa14","githubUsername":"ajolonauta14","score":14,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa15","githubUsername":"ajolonauta15","score":15,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]}])
    });
});

// npm test test/controllers/ExplorerController.test.js
