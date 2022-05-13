# Requerimiento: 

Crear un endpoint que regrese la lista de explorers filtrados por un stack

# Procedimiento

1. Instalamos la dependencia jest.

> npm init
> npm install --save -dev jest

2. Modificamos el archivo package.json en la linea de "test" pues en windows 10 hay que cambiar la dirección para que pueda funcionar jest.
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen2.png)

3. Agregamos prueba para el nuevo requerimiento, esta se crea en el archivo ExplorerService.test.js y tiene que filtrar los explorers que tengan el stack que se indique.
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen3.png)

4. Vemos que la prueba falla porque la función ExplorerService.filterByStack no se ha definido.

5. Agregamos la función filterByStacj en el archivo ExplorerService.js
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen5.png)

6. Agregamos una prueba para el requerimiento desde el ExplorerControler
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen6.png)

7. Verificamos que la prueba falla porque la función getExplorerWithStack no se ha definido

8. Definimos la función faltante en el archivo ExplorerController.js
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen8.png)

9. Agregamos al server.js un nuevo endPoint con una nueva URL y un nuevo método getExplorersWithStack tomado del archivo ExplorerController.
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen9.png)

10. Verificamos que la url funcione
 Consumimos nuestro servidor
  > node lib/server.js
 Abrimos la dirección localhost:3000/v1/explorers/stack/javascript.
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen10.png)

11. Verificamos que las pruebas automatizadas de GitHub funcionen y pasen.
![image](https://github.com/CeViMu/fizzbuzz-1/blob/master/images/Imagen11.png)

12. Instalamos linter
>npm install eslint --save-dev

 Modificamos package.json, agregar debajo de test
 > "linter": "node ./node_modules/eslint/bin/eslint.js"

 Crear configuración en archivo .eslintrc
 > npm init @eslint/config

 Corremos linter
 > npm run linter

 Arreglamos el estilo de nuestro proyecto
 > npm run linter -fix


Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript
