const FizzbuzzService = require("./../../lib/services/FizzbuzzService")

describe("Test para FizzbuzzService", () =>{
    test("1 Obtener los tricks adecuados o el score", () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toStrictEqual({"name": "Explorer1", "score": 1, "trick": 1});
    });
    test("2 Obtener los tricks de Fizz", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toStrictEqual({"name": "Explorer3", "score": 3, "trick": "FIZZ"});
    });
    test("3 Obtener los tricks Buzz", () =>{
        const explorer5 = {name: "Explorer5", score: 5};
        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toStrictEqual({"name": "Explorer5", "score": 5, "trick": "BUZZ"});
    });
    test("4 Obtener los tricks de FizzBuzz", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toStrictEqual({"name": "Explorer15", "score": 15, "trick": "FIZZBUZZ"});
    });
    test("5 Prueba de score y trick sin explorers", () =>{
        const exploreramount = {score: 1, trick: 1};
        expect(FizzbuzzService.applyValidationInNumber(exploreramount)).toStrictEqual({"score": 1, "trick": 1});
    });
    test("6 Prueba de score y trick Fizz", () =>{
        const exploreramount = {score: 3, trick: "Fizz"};
        expect(FizzbuzzService.applyValidationInNumber(exploreramount)).toStrictEqual({"score": 3, "trick": "Fizz"});
    });
    test("7 Prueba de score y trick Buzz", () =>{
        const exploreramount = {score: 5, trick: "Buzz"};
        expect(FizzbuzzService.applyValidationInNumber(exploreramount)).toStrictEqual({"score": 5, "trick": "Buzz"});
    });
    test("8 Prueba de score y trick Fizzbuzz", () =>{
        const exploreramount = {score: 15, trick: "Fizzbuzz" };
        expect(FizzbuzzService.applyValidationInNumber(exploreramount)).toStrictEqual({"score": 15, "trick": "Fizzbuzz"});
    });
});