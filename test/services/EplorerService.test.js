const Reader = require('./../../lib/utils/Reader')
const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Unit Test for ExplorerService class", () => {

    test('Use of filterByMission method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        
        expect(ExplorerService.filterByMission(explorers, "node")).not.toBeUndefined;
    });
    test('Use of getAmountOfExplorersByMission method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        expect(ExplorerService.getAmountOfExplorersByMission(explorers, "node")).toBe(10)//verifica que el valor no sea undefine
    });
    test('Use of getExplorersUsernamesByMission method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        expect(ExplorerService.getExplorersUsernamesByMission(explorers, "node")).not.toBeUndefined()//verifica que el valor no sea undefine
    });
    test('Use of filterByStact method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        expect(ExplorerService.filterByStact(explorers, "javascript")).not.toBeUndefined()//verifica que el valor no sea undefine
    });
    
})