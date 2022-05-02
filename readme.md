# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript


## Nuevo Requerimiento 

## Descripcion 
Crear un endpoint que regrese toda la lista de explorers filtrados por un stack.

### Endpoint = GET /v1/explorers/stack/:value
el endpoint regresa el en formato json los explores con el stack solicitado 
ejemplo: "javascript"

```javascript
 {
  "name": "Woopa1",
  "githubUsername": "ajolonauta1",
  "score": 1,
  "mission": "node",
  "stacks": [
    "javascript",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa2",
  "githubUsername": "ajolonauta2",
  "score": 2,
  "mission": "node",
  "stacks": [
    "javascript",
    "groovy",
    "elm"
  ]
},
{
  "name": "Woopa4",
  "githubUsername": "ajolonauta4",
  "mission": "node",
  "score": 4,
  "stacks": [
    "javascript"
  ]
},
{
  "name": "Woopa5",
  "githubUsername": "ajolonauta5",
  "score": 5,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "elm"
  ]
},
{
  "name": "Woopa9",
  "githubUsername": "ajolonauta9",
  "score": 9,
  "mission": "java",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa10",
  "githubUsername": "ajolonauta10",
  "score": 10,
  "mission": "java",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa11",
  "githubUsername": "ajolonauta11",
  "score": 11,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa12",
  "githubUsername": "ajolonauta12",
  "score": 12,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa13",
  "githubUsername": "ajolonauta13",
  "score": 13,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa14",
  "githubUsername": "ajolonauta14",
  "score": 14,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa15",
  "githubUsername": "ajolonauta15",
  "score": 15,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
}
```
## Pasos que se seguieron:

1.- Se genero un metodo static en la clase ExplorerService.
Este metodo llamado getExplorersByStack filtra por el stack solicitado e incluye con el motedo .Includes() a los explores que hacen match con el stack.

```javascript
static getExplorersByStack(explorers, stack){
        const explorersByStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersByStack;
}
```

2.- Se genero un metodo static en la clase Explorercontroller.
Este metodo llamado de la misma forma getExplorersByStack realiza el llamado al metodo anterior, esto con la finalidad de delegar la funcionalidad ahroa a la API.

```javascript
static getExplorersByStacks(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersByStack(explorers, stack);
}
```

3.- Se genero el endpoint solicitado en el archivo Server.js

```javascript
app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorersInStack = ExplorerController.getExplorersByStacks(stack);
    response.json(explorersInStack);
});
```

4.- Se generaron pruebas en para los respectivos metodos en los respectivos archivos
```javascript
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

});
```

```javascript
const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Testing de getExplorersByStacks method", () => { 
    test("testing getExplorersByStack method", () => {
        const explorersInNode = ExplorerController.getExplorersByStacks("elm");
        expect(explorersInNode).toStrictEqual([
            {"name":"Woopa1","githubUsername":"ajolonauta1","score":1,"mission":"node","stacks":["javascript","reasonML","elm"]},{"name":"Woopa2","githubUsername":"ajolonauta2","score":2,"mission":"node","stacks":["javascript","groovy","elm"]},{"name":"Woopa5","githubUsername":"ajolonauta5","score":5,"mission":"node","stacks":["javascript","elixir","elm"]},{"name":"Woopa6","githubUsername":"ajolonauta6","score":6,"mission":"java","stacks":["elm"]},{"name":"Woopa8","githubUsername":"ajolonauta8","score":8,"mission":"java","stacks":["elm"]},{"name":"Woopa9","githubUsername":"ajolonauta9","score":9,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa10","githubUsername":"ajolonauta10","score":10,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa11","githubUsername":"ajolonauta11","score":11,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa12","githubUsername":"ajolonauta12","score":12,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa13","githubUsername":"ajolonauta13","score":13,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa14","githubUsername":"ajolonauta14","score":14,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa15","githubUsername":"ajolonauta15","score":15,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]}
        ]);
    });

});
```

5.- Se realizo el comando npm run server y se probaron por url las query params correspondientes para testiar su funcionamiento.
Fin.



