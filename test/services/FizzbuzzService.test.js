const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test FizzBuzz Service", () => { 
    test("Test triker= 1", () => { 
        const explorer1 = {name: "Explorer1", score: 1};        
        const explorerTrickScore = FizzbuzzService.ApplyValidationInExplorer(explorer1);     
        expect(explorerTrickScore).toEqual({name: "Explorer1", score: 1, trick: 1});
    });

    test("Cuando el score sea divisible entre 3 ,tricke: FIZZ ", () => { 
        const explorer3 = {name: "Explorer3", score: 3};
        const explorerTrickeFizz = FizzbuzzService.ApplyValidationInExplorer(explorer3);

        expect(explorerTrickeFizz).toEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
    });

    test("Cuando el score sea divisible sea entre 5, trick: BUZZ ", () => { 
        const explorer5 = {name: "Explorer5", score: 5};
        const explorerTrickBuzz = FizzbuzzService.ApplyValidationInExplorer(explorer5);

        expect(explorerTrickBuzz).toEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
    });

    test("Cuando el score sea divisible sea entr 3 y 5, trick: FIZZBUZZ", () => { 
        const explorer15 = {name: "Explorer15", score: 15};
        const explorerTrickFizzbuzz = FizzbuzzService.ApplyValidationInExplorer(explorer15);

        expect(explorerTrickFizzbuzz).toEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });
});

describe("Test Método applyValidationInNumber", () => { 
    test("Cuando el numero es divisible entre 3 y 5 devuelve FIZZbUZZ", () => { 
        const num1 = 15;
        const ValorFIZZBUZZ = FizzbuzzService.applyValidationInNumber(num1);

        expect(ValorFIZZBUZZ).toBe("FIZZBUZZ");
    });

    test("Cuando el numero es divisible entre 3 devuelve FIZZ", () => { 
        const num1 = 3;
        const ValorFIZZ = FizzbuzzService.applyValidationInNumber(num1);

        expect(ValorFIZZ).toBe("FIZZ");
    });

    test("Cuando el numero es divisible entre 5 devuelve BUZZ", () => { 
        const num1 = 5;
        const ValorBUZZ = FizzbuzzService.applyValidationInNumber(num1);

        expect(ValorBUZZ).toBe("BUZZ");
    });

    test("Recibe el numero y devuelve le mismo numero", () => { 
        const num1 = 2;
        const Valormismo = FizzbuzzService.applyValidationInNumber(num1);

        expect(Valormismo).toBe(2);
    });
});