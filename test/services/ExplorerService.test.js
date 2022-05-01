const ExplorerService = require('../../lib/services/ExplorerService');

describe('Tests para ExplorerService', () => {
  test('Requerimiento 1: Calcular todos los explorers en una misión', () => {
    const explorers = [{ mission: 'node' }];
    const explorersInNode = ExplorerService.filterByMission(explorers, 'node');
    expect(explorersInNode.length).toBe(1);
  });

  test('Requerimiento 2: Obtener todos los explorers que contengan en su stack un valor enviado como parametro', () => {
    const explorers = [
      {
        name: 'Woopa1',
        githubUsername: 'ajolonauta1',
        score: 1,
        mission: 'node',
        stacks: [
          'javascript',
          'reasonML',
          'elm',
        ],
      },
      {
        name: 'Woopa2',
        githubUsername: 'ajolonauta2',
        score: 2,
        mission: 'node',
        stacks: [
          'javascript',
          'groovy',
          'elm',
        ],
      },
      {
        name: 'Woopa4',
        githubUsername: 'ajolonauta4',
        mission: 'node',
        score: 4,
        stacks: [
          'javascript',
        ],
      },
    ];

    const explorersWithJavaScriptInStack = ExplorerService.getExplorersByValueInStack(explorers, 'javascript');
    const explorersWithGroobyInStack = ExplorerService.getExplorersByValueInStack(explorers, 'groovy');
    const explorersWithElmInStack = ExplorerService.getExplorersByValueInStack(explorers, 'elm');
    const explorersWithJavaInStack = ExplorerService.getExplorersByValueInStack(explorers, 'java');

    expect(explorersWithJavaScriptInStack.length).toBe(3);
    expect(explorersWithElmInStack.length).toBe(2);
    expect(explorersWithGroobyInStack.length).toBe(1);
    expect(explorersWithJavaInStack.length).toBe(0);
  });
});
