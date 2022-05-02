const FizzbuzzService = require("../../lib/services/FizzbuzzService");


describe("Unit tests for FizzbuzzService class",()=>{

    test("1) ",()=>{

        //Código que se utiliza en la aplicación
        const explorer1 = {name: "Explorer1", score: 1}
        const validation1 = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

        const explorer3 = {name: "Explorer3", score: 3}
        const validation2 = FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

        const explorer5 = {name: "Explorer5", score: 5}
        const validation3 = FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

        const explorer15 = {name: "Explorer15", score: 15}
        const validation4 = FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}



        //Validaciones
        
        expect(JSON.stringify(validation1)).toBe( "{\"name\":\"Explorer1\",\"score\":1,\"trick\":1}" )
        expect(JSON.stringify(validation2)).toBe( "{\"name\":\"Explorer3\",\"score\":3,\"trick\":\"FIZZ\"}" )
        expect(JSON.stringify(validation3)).toBe( "{\"name\":\"Explorer5\",\"score\":5,\"trick\":\"BUZZ\"}" )
        expect(JSON.stringify(validation4)).toBe( "{\"name\":\"Explorer15\",\"score\":15,\"trick\":\"FIZZBUZZ\"}" )



    })

})