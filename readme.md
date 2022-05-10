## Solución
Agregar funcionalidad de filtrar explorers por stack en la clase ExplorerService
```javascript
static filterByStack(explorers, stack){
        const explorersByStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersByStack;
    }
```    

Crear pruebas unitarias en ExplorerService.test.js para el nuevo método
```javascript
test("Requerimiento 2: Retornar los explorers que tengan javascript en su stack", () => {
        const explorers = [{stacks: ["javascript"]}, {stacks: ["javascript", "elm"]}, {stacks: ["elm"]}];
        const explorersInJS = ExplorerService.filterByStack(explorers, "javascript");
        expect(explorersInJS.length).toBe(2);
    });
``` 

Agregar la nueva funcionalidad de ExplorerService en el controlador ExplorerController
```javascript
static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByStack(explorers, stack);
    }
``` 

Crear pruebas unitarias en ExplorerController.test.js para el nuevo método
```javascript
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Retornar los explorers que tengan javascript en su stack", () => {
        const explorersInJS = ExplorerController.getExplorersByStack("javascript");
        expect(explorersInJS.length).toBe(11);
    });
});
``` 

Crear el endpoint en server.js para aplicar la nueva funcionalidad
```javascript
app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorersByStack = ExplorerController.getExplorersByStack(stack);
    response.json(explorersByStack);
});
``` 

## Resultados
![Screen Shot 2022-05-10 at 10 57 32](https://user-images.githubusercontent.com/54159730/167692863-0e8fa29f-3d15-4007-9857-3e289e789232.png)
