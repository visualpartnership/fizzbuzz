# Contribución Open Source


Requerimiento:

Crea un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack.

Ejemplo de url: localhost:3000/v1/explorers/stack/javascript.
Response: Todos los explorers que tengan en `stack` el valor recibido en la url: `javascript`. (este valor debe ser dinámico)

Desarrollo:

En el archivo `lib/services/ExplorerService.js` se creo el método estatico `getExplorersUsernamesByStack` que realiza la funcionalidad de filtracion por el `stack`y se llama mediante el controlador `/lib/controllers/` con el método estatico `getExplorersUsernamesByStack`.
El núevo endpoint se encuentra en el archivo `lib/server.js` con el método GET en la línea de código 43. 

Endpoint: /v1/explorers/stack/:stack  

Url: localhost:3000/v1/explorers/stack/javascript 











# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript
