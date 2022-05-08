# Resultados
Se modificaron los archivos "ExplorerController.js", "ExplorerService.js" y "ExplorerService.test.js"

1.- "ExplorerController.js":

![Screenshot](https://github.com/FelipeReyesMi/Fizzbuzz-/blob/master/imagenes/explorerController.png)

2.- "ExplorerService.js":

![Screenshot](https://github.com/FelipeReyesMi/Fizzbuzz-/blob/master/imagenes/explorerServices.png)

3.- "ExplorerService.test.js":

![Screenshot](https://github.com/FelipeReyesMi/Fizzbuzz-/blob/master/imagenes/test.png)

El resultado que nos arroja nuestro nuevo endpoint, es el siguiente:

![Screenshot](https://github.com/FelipeReyesMi/Fizzbuzz-/blob/master/imagenes/result.png)


# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript
