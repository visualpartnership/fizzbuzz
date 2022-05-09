const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

});

describe("Nuevo requerimiento: Listas de explorers filtrados por stack", () =>{
    test("Comprueba existencia del metodo", () =>{
        const result = typeof ExplorerService.filterByStack;
        expect(result).toBe("function");
    });

    test("Sin formato minimo del objeto a filtrar", () =>{
        const result = ExplorerService.filterByStack(null, null);
        expect(result).toBeUndefined();
    });
});
