const Reader = require("../../lib/utils/reader");


describe("Unit tests for Reader class",()=>{

    test("1) Return the ",()=>{

        //Code to be used in the app
        const explorers = Reader.readJsonFile("explorers.json"); 

        //Validations of the code behaviour
        expect(explorers).not.toBeUndefined()
    })


})