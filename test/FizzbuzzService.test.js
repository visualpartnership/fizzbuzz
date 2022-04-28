const FizzbuzzService=require("../lib/services/FizzbuzzService");

describe("Test para FizzBuzz service",()=>{
    test("validacion a explorer1" ,()=>{
        const explorer1 = {name: "Explorer1", score: 1, trick:0};
        const explorerValidation = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerValidation.trick).toBe(1);
    });
});

describe("Test para FizzBuzz service",()=>{
    test("validacion a explorer3" ,()=>{
        const explorer3 = {name: "Explorer3", score: 3, trick:0};
        const explorerValidation = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerValidation.trick).toBe("FIZZ");
    });
});

describe("Test para FizzBuzz service",()=>{
    test("validacion a explorer5" ,()=>{
        const explorer5 = {name: "Explorer5", score: 5,  trick:0};
        const explorerValidation = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerValidation.trick).toBe("BUZZ");
    });
});


describe("Test para FizzBuzz service",()=>{
    test("validacion a explorer5" ,()=>{
        const explorer15 = {name: "Explorer15", score: 15,  trick:0};
        const explorerValidation = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerValidation.trick).toBe("FIZZBUZZ");
    });
});

