const ExplorerService = require ("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

describe("Test suite for explorerControll", ()=>{
    test("1) Regresar lista de explorers por Stack", () =>{
       	const ListExplorersByStack = ExplorerService.getExplorersByStack(explorers,"reasonML");
        expect(ListExplorersByStack.length).toBeDefined();
    });
});
