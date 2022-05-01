const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test('Requerimiento 2: Obtener los explorers que se encuentres en una misión en especifica', () => {

        let result = ExplorerService.filterByStack(null, null);
        expect(result).toEqual([]);

        result = ExplorerService.filterByStack();
        expect(result).toEqual([]);

        const explorers = [
            {
                name: 'Woopa1',
                mission: 'node',
                stacks:['javascript','reasonML']
            },
            {
                name: 'Woopa2',
                mission: 'node',
                stacks:['reasonML', 'elm','groovy']
            },
            {
                name: 'Woopa3',
                mission: 'node',
                stacks:['elm', 'javascript']
            }
        ];

        result = ExplorerService.filterByStack(explorers, 'javascript');
        expect(result.length).toBe(2);
        expect(result[0].stacks).toContain('javascript');

        result = ExplorerService.filterByStack(explorers, 'groovy');
        expect(result.length).toBe(1);
        expect(result[0].stacks).toContain('groovy');

    })
});
