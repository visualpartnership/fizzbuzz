# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript


----------PULL REQUEST ----------------
# Se modifico la clase ExplorerService
Se modifico la clase Explorer Service, se agrego la funcion `getExplorerByStack(explorers,stack)` donde explorers es la base de datos donde se va a buscar y stack es lo que se buscara
-Se crea un `notUndefined` que indica un valor indifenido
-Se usa la funcion map para hacer la busqueda del stack dentro de la lista de los explorers y se guarda en `ExplorerByMission`
-Se usa filter en el map para eliminar los elementos indefinidos
-Se regresa ExplorersByMission

# Se creo la clase ExplorerController

En el se tiene 1 funcion estatica nueva llamada "getExplorerByStack" que recibe como parametro el stack que se va a buscar
-Leera el archivo Explorers.json y regresara, por medio del ExplorerService con la funcion getExplorersByStack, los explorer que tengan en su stack el buscando

# Para la API se hace un nuevo endpoint que funcionara en la URL `localhost:3000/v1/explorers/stack/:stack`
-Recibe el stack por medio de una `Query Params`
-Se recibe el archivo JSON con la informacion de los explorers que cuentan con el stack y se guarda en `explorersInMission`
-Se devuelve por medio de un response.json

# Pruebas de ExplorerController
Se realizo un archivo de pruebas `ExplorerController.test.js`
-Se adquiere el ExplorerController
.Se describe el Test y requerimiento
-Se adquiere los explorers por stack y se realiza la prueba
