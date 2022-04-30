const ExplorerService = require('../../lib/services/ExplorerService');

describe('Tests para ExplorerService', () => {
  test('Requerimiento 1: Calcular todos los explorers en una misión', () => {
    const explorers = [{ mission: 'node' }];
    const explorersInNode = ExplorerService.filterByMission(explorers, 'node');
    expect(explorersInNode.length).toBe(1);
  });

  test('Requerimiento 2: Devolver lista de explorers que cumplen con stack', () => {
    const explorers = [{ name: 'explorer1', stacks: ['node', 'javascript'] }, { name: 'explorer2', stacks: ['javascript'] }, { name: 'explorer3', stacks: ['node'] }];
    const explorersWithStack = ExplorerService.getExplorersByStack(explorers, 'javascript');
    console.log(explorersWithStack);
    expect(explorersWithStack.length).toBe(2);
  });
});
