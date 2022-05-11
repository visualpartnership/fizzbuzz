# Requerimiento: 

Crear un endpoint que regrese la lista de explorers filtrados por un stack

# Procedimiento

1. Modificar el archivo package.json en la linea de "test" pues en windows 10 hay que cambiar la dirección para que pueda funcionar jest.

2. Agregar prueba para el nuevo requerimiento, esta se crea en el archivo ExplorerService.test.js y tiene que filtrar los explorers que tengan el stack que se indique.




# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript
