const ExplorerController = require('../../lib/controllers/ExplorerController');

describe('Test para ExplorerController', () => {
  test('Obtener todos los explorers que contengan en su stack un valor enviado como parametro', () => {
    const explorersWithJavaScriptInStack = ExplorerController.getExplorersByValueInStack('javascript');
    const explorersWithGroobyInStack = ExplorerController.getExplorersByValueInStack('groovy');
    const explorersWithElmInStack = ExplorerController.getExplorersByValueInStack('elm');
    const explorersWithJavaInStack = ExplorerController.getExplorersByValueInStack('java');

    expect(explorersWithJavaScriptInStack.length).toBe(11);
    expect(explorersWithElmInStack.length).toBe(12);
    expect(explorersWithGroobyInStack.length).toBe(9);
    expect(explorersWithJavaInStack.length).toBe(0);
  });
});
