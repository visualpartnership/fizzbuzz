## Requerimiento: Agregar servicio de filtro de Explorers por Stack

Se agregar lógica para agregar un filtro por stack, para ello se realizaron las siguientes modificaciones:

## ExplorerService

Se agrega método **getExplorersByStack** donde se utiliza un filter y se aplica la propiedad contains al array **stacks**

```javascript
explorers.filter((explorer) => explorer.stacks.includes(stack))
```

## ExplorerService.test

Se agrega las pruebas para verificar el método **getExplorersByStack** del ExplorerService, donde se verifica la cantidad de resultados obtenidos, así como verificar que cada uno de los resultados contenga el stack experado.

## ExplorerController

Se agrega el método **getExplorersByStack**, donde se carga los explorers y se llama al método **getExplorersByStack** del ExplorerService 

## Server

Se agrega endpoint de acceso para el requerimiento, y se utiliza el método **getExplorersByStack** del ExplorerController.

El resultado de la llamada al endpoint es un objeto json similar al siguiente:

```json
{stack: <stack_recibido>, explorers: [...explorers]}
```



