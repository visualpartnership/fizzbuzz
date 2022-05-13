# Requerimiento: 

Crear un endpoint que regrese la lista de explorers filtrados por un stack

# Procedimiento

1. Instalamos la dependencia jest.

> npm init
> npm install --save -dev jest

2. Modificamos el archivo package.json en la linea de "test" pues en windows 10 hay que cambiar la dirección para que pueda funcionar jest.

3. Agregamos prueba para el nuevo requerimiento, esta se crea en el archivo ExplorerService.test.js y tiene que filtrar los explorers que tengan el stack que se indique.

4. Vemos que la prueba falla porque la función ExplorerService.filterByStack no se ha definido.

5. Agregamos la función filterByStacj en el archivo ExplorerService.js

6. Agregamos una prueba para el requerimiento desde el ExplorerControler

7. Verificamos que la prueba falla porque la función getExplorerWithStack no se ha definido

8. Definimos la función faltante en el archivo ExplorerController.js

9. Agregamos al server.js un nuevo endPoint con una nueva URL y un nuevo método getExplorersWithStack tomado del archivo ExplorerController.

10. Verificamos que la url funcione
 Consumimos nuestro servidor
  > node lib/server.js
 Abrimos la dirección localhost:3000/v1/explorers/stack/javascript.

11. Verificamos que las pruebas automatizadas de GitHub funcionen y pasen.
11. Corremos linter
 > npm run linter
 Arreglamos el estilo de nuestro proyecto
 > npm run linter -fix


# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript
