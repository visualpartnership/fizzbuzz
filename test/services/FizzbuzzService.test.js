const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests para FizzbuzzService", () => {
    test("Requerimiento 1: Validacion TRICK ", () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1.trick).toBe(1);

    });
});
describe("Tests para FizzbuzzService", () => {
    test("Requerimiento 2: Validacion FIZZ ", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("FIZZ");

    });
});
describe("Tests para FizzbuzzService", () => {
    test("Requerimiento 3: Validacion BUZZ ", () =>{
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer5.trick).toBe("BUZZ");

    });
});
describe("Tests para FizzbuzzService", () => {
    test("Requerimiento 4: Validacion FIZBUZZ ", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
});

test ("Apply validation in number",()=>{
    const explorer = FizzbuzzService.applyValidationInNumber(5);
    expect(explorer).toBe("BUZZ");
});