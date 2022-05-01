const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test para ExplorerService", () => {
    test("Prueba 1: se usa score: 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer1Validate = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1Validate).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
    });

    test("Prueba 2: se usa score: 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer3Validate = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3Validate).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
    });

    test("Prueba 3: se usa score: 5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const explorer5Validate = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer5Validate).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
    });

    test("Prueba 4: se usa score: 15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const explorer15Validate = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer15Validate).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });

    test("Prueba 5: se usa score: 1", () => {
        const explorer1Validate = FizzbuzzService.applyValidationInNumber(1);
        expect(explorer1Validate).toBe(1);
    });

    test("Prueba 5: se usa score: 3", () => {
        const explorer3Validate = FizzbuzzService.applyValidationInNumber(3);
        expect(explorer3Validate).toBe("FIZZ");
    });

    test("Prueba 5: se usa score: 5", () => {
        const explorer5Validate = FizzbuzzService.applyValidationInNumber(5);
        expect(explorer5Validate).toBe("BUZZ");
    });

    test("Prueba 5: se usa score: 15", () => {
        const explorer15Validate = FizzbuzzService.applyValidationInNumber(15);
        expect(explorer15Validate).toBe("FIZZBUZZ");
    });
});