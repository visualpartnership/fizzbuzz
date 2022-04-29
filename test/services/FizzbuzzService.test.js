const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Pruebas unitarias Fizbuzz",()=>{
    test ("test para validar 1",()=>{
        const explorer1 = { name: "Explorer1", score: 1 };
        const Fizzbuss1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(Fizzbuss1.trick).toBe(1);

    });

    test ("test para validar FIZZ",()=>{
        const explorer3 = { name: "Explorer3", score: 3 };
        const Fizzbuss3 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(Fizzbuss3.trick).toBe("FIZZ");

    });

    test ("test para validar BUZZ",()=>{
        const explorer5 = { name: "Explorer5", score: 5 };
        const Fizzbuss5 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(Fizzbuss5.trick).toBe("BUZZ");

    });

    test ("test para validar FIZZBUZZ",()=>{
        const explorer15 = { name: "Explorer15", score: 15 };
        const Fizzbuss15 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(Fizzbuss15.trick).toBe("FIZZBUZZ");

    });




});