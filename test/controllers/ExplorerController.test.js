const { TestWatcher } = require('jest');
const ExplorerController = require('./../../../fizzbuzz/lib/controllers/ExplorerController');

describe('Unit Test for ExplorerController',()=>{
    test('Parte 1:Prueba de unidad para llamar la funcion filtrar por stack',()=>{
        const ExplorersInNodeJavascript = ExplorerController.getExplorersByStack('javascript');

        expect(ExplorersInNodeJavascript).not.toBeUndefined();
    });
})