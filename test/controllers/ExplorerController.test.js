const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: obtener todo los explorers en un stack", () => {
        const explorersWithStackJavascript = ExplorerController.getExplorersByStack("javascript");
        expect(explorersWithStackJavascript[0].stacks[0]).toBe("javascript");
    });

    test("regresar una respuesta para numero en fizzbuzzbot telegram", () => {
        const number1 = 3;
        const fizzbuzzBotResponse1 = ExplorerController.applyFizzbuzzBotResponse(number1);
        expect(fizzbuzzBotResponse1).toBe(`Tu número es: ${number1}. Validación: ${ExplorerController.applyFizzbuzz(number1)}`);

        const number2 = 5;
        const fizzbuzzBotResponse2 = ExplorerController.applyFizzbuzzBotResponse(number2);
        expect(fizzbuzzBotResponse2).toBe(`Tu número es: ${number2}. Validación: ${ExplorerController.applyFizzbuzz(number2)}`);

        const number3 = 15;
        const fizzbuzzBotResponse3 = ExplorerController.applyFizzbuzzBotResponse(number3);
        expect(fizzbuzzBotResponse3).toBe(`Tu número es: ${number3}. Validación: ${ExplorerController.applyFizzbuzz(number3)}`);

        const number4 = 7;
        const fizzbuzzBotResponse4 = ExplorerController.applyFizzbuzzBotResponse(number4);
        expect(fizzbuzzBotResponse4).toBe(`Tu número es: ${number4}. Validación: ${ExplorerController.applyFizzbuzz(number4)}`);
    });

    test("Regresar cadena de texto con los usuarios de cada mision" , ()=> {
        const mision1 = 'node';
        const usernamesInMisionBotResponse1 = ExplorerController.botResponseUsernamesInMission(mision1);
        let correctResult1 = `Los usernames de los explorers en la mision ${mision1} son: `
        correctResult1 += 'ajolonauta1, ajolonauta2, ajolonauta3, ajolonauta4, ajolonauta5, ajolonauta11, ajolonauta12, ajolonauta13, ajolonauta14, ajolonauta15'
        expect(usernamesInMisionBotResponse1).toBe(correctResult1);

        const mision2 = 'java';
        const usernamesInMisionBotResponse2 = ExplorerController.botResponseUsernamesInMission(mision2);
        let correctResult2 = `Los usernames de los explorers en la mision ${mision2} son: `
        correctResult2 += 'ajolonauta6, ajolonauta7, ajolonauta8, ajolonauta9, ajolonauta10'
        expect(usernamesInMisionBotResponse2).toBe(correctResult2);
    });

});