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

});