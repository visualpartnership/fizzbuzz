const ExplorerService = require('./../../lib/services/ExplorerService')
const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe('Pruebas para ExplorerController', () => {
    test("Test 1: Filtrando explorers por mission",()=>{
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);        
    })
})