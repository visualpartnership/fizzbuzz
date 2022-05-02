const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Prueba de ExplorerController", () =>{
    test("Obtener javascript de stack del explorer", () =>{
        const explorer = {stack:[
            "javascript",
            "groovy",
            "elm"
        ]};
        const explorerStackLanguaje = ExplorerController.getStackLng(explorer, "javascript");
        console.log(explorerStackLanguaje);
        expect(explorerStackLanguaje).toMatch(/javascript/);
    });
});