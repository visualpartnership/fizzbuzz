# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript

# Proceso

1. Instalación de jest
2. Prueba de unidad de ExplorerService - Requerimiento 2 - filterExplorersByStack
```javascript
  test("Requerimiento 2: Mostrar todos los explorers en el stack javascript", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInStack = ExplorerService.filterExplorersByStack(explorers, "javascript");
        expect(explorersInStack.length).toBe(11);
    });
```
(Estructura de la prueba mimetizada con la ya descrita en el ejercicio)
3. Crear funcion filterExplorersByStack(explorers, stack)
```javascript
  //filter explorers by stack
    static filterExplorersByStack(explorers, stack){
        const explorersByStack = explorers.filter((explorer) => explorer.stacks.includes(stack)).map((explorer) => explorer.name);
        return explorersByStack;
    }
```
(Uso de filtrado con la propiedad `includes` para tomar el valor de stack incluido en el key value stacks del json explorers.json)
4. Prueba de unidad de requerimiento 2 para filterExplorersByStack, probada y pasada  `npm test test/services/ExplorerService.test.js`
5. Prueba de unidad de ExplorerController - Requerimiento 2 - getExplorersByStack
```javascript
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test de Explorer Controller", () => {
    test("Requeerimiento 2: filtrar explorers por stack javascript", () => {
        const explorersInStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInStack.length).toBe(11);
    });
});
```
(Misma estructura de la prueba anterior)
6. Crear funcion getExplorersByStack(stack)
```javascript
   static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterExplorersByStack(explorers, stack);
    }
```
(Retorna el filtrado de explorers recibiendo el stack como parámetro)
7. Prueba de unidad de requerimiento 2 para getExplorersByStack, probada y pasada  `npm test test/controllers/ExplorerController.test.js`
8. Creación de endpoint filtrado de explorers por stack, tomando javascript como ejemplo

```javascript
 // get the explorers by stack request endpoint
app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorerStack = ExplorerController.getExplorersByStack(stack);
    response.json({explorers: explorerStack, stack: stack});
});
```
9. Uso de Linter con `npm run linter` y `npm run linter-fix` (No arrojó ningún error)

Todos los pasos fueron realizados en esta secuencia y solo se realizó un commit por prueba mas el commit del endpoint
