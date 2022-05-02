const Reader = require("../../lib/utils/Reader");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test para FizzbuzzService", () => {
    test("Test 1. Revisar el score1. Expect: score", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorer1 = explorers.filter((explorer) => explorer.score === 1);
        const explorersFizzBuzz = FizzbuzzService.applyValidationInExplorer(explorer1);
        const explorerTrick = explorersFizzBuzz.trick;
        expect(explorerTrick).toBe(1);
    });

    test("Test 2. Revisar el score3. Expect: FIZZ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorer3 = explorers.filter((explorer) => explorer.score === 3);
        const explorersFizzBuzz = FizzbuzzService.applyValidationInExplorer(explorer3);
        const explorerTrick = explorersFizzBuzz.trick;
        expect(explorerTrick).toBe("FIZZ");
    });

    test("Test 3. Revisar el score5. Expect: BUZZ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorer5 = explorers.filter((explorer) => explorer.score === 5);
        const explorersFizzBuzz = FizzbuzzService.applyValidationInExplorer(explorer5);
        const explorerTrick = explorersFizzBuzz.trick;
        expect(explorerTrick).toBe("BUZZ");
    });

    test("Test 4. Revisar el score15. Expect: FIZZBUZZ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorer15 = explorers.filter((explorer) => explorer.score === 15);
        const explorersFizzBuzz = FizzbuzzService.applyValidationInExplorer(explorer15);
        const explorerTrick = explorersFizzBuzz.trick;
        expect(explorerTrick).toBe("FIZZBUZZ");
    });

});