# Nuevo endpoint

## Descripción 

### GET /v1/explorers/stack/:value

El endpoint regresa en formato json todos los explorers que contengan en su stack el valor
que se envia por el parametro :value

![Ejemplo]("./Capture.PNG")


## Proceso

1. Se creó el metodo estatico getExplorersByValueInStack en el servicio ExplorerService para filtrar los explorers que contengan en su stack un valor enviado como parametro 

```javascript
static getExplorersByValueInStack(explorers, value) {
    const explorersByvalueInStack = explorers.filter((explorer) => explorer.stacks.includes(value));
    return explorersByvalueInStack;
}
```

2. Se creó el metodo estatico getExplorersByValueInStack en el controllador ExplorerController para 
poder exponer a traves de una api la funcionalidad de getExplorersByValueInStack del servicio ExplorerService
```javascript
static getExplorersByValueInStack(value) {
    const explorer = Reader.readJsonFile('explorers.json');
    return ExplorerService.getExplorersByValueInStack(explorer, value);
}
```

3. Se crea el endpoint GET /v1/explorers/stack/:value para exponer el nuevo requerimiento

```javascript
app.get('/v1/explorers/stack/:value', (request, response) => {
  const { value } = request.params;
  const explorersByValueInStack = ExplorerController.getExplorersByValueInStack(value);
  response.json(explorersByValueInStack);
});
```