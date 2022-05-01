const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Pruebas de unidad para la clase ExplorerController", () => {

    test("Validar funcionalidad getExplorersFilterByStack", () => {        
        const result = ExplorerController.getExplorersFilterByStack("javascript");
        expect(result.length).toBe(10);
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    stacks: (expect.arrayContaining(["javascript"]))
                })
            ])
        );
    });
});