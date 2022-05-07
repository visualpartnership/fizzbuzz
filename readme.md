# Linter

1. Instalar dependencia:

> npm install eslint --save-dev

2. Modificar package.json, agregar debajo de test

> "linter": "node ./node_modules/eslint/bin/eslint.js"

3. Crear configuración en archivo .eslintrc (si se versiona)

> npm init @eslint/config

Rules: https://eslint.org/docs/rules/
Airbnb Code Style: https://github.com/airbnb/javascript



---

## Contribución Open Source

# Requerimientos:

Crea un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack.

Ejemplo de url: localhost:3000/v1/explorers/stack/javascript.
Response: Todos los explorers que tengan en stack el valor recibido en la url: javascript. (este valor debe ser dinámico)

# Descripción de solición

1. Intale eslint
2. Modifique el corazón del proyecto, en package.json agregue la refrencia para lint y edite "test" para poder hacer uso de jest, ya que tengo el sistema operativo de Windows 10 y con la que tenia no funciona jest.

![image](https://user-images.githubusercontent.com/99162884/167275275-92fb5182-5938-4998-99a0-e62e68e6541b.png)

3. Agregue una prueba unitaria para el nuevo requerimento de método GET que filtre los explorers que tengan stack dinamico.

Primero la hice fallar, lo que me solicito fue crear el metodo porque no existia (Paso 4).

Segundo la hice fallar mandandole stack no existente.

Tercero hice que la prueba pasará.

![image](https://user-images.githubusercontent.com/99162884/167275338-be91c6d2-2aeb-405d-84ed-7201136033d2.png)

4. En el servicio 'ExplorerService', cree el método filterByStack, el cual recibirá la lista de explorers y un valor stack, apartir de ahi crea una lista nueva filtrada con la condición de traer todos los explorers que incluyan en su arreglo stack, el valor de stack solicitado por el usuario(javascrit, elixir etc).

![image](https://user-images.githubusercontent.com/99162884/167275411-2787e890-f518-4ad9-9d4d-83ef7bb21da1.png)


5. Agregue ese nuevo servicio getExplorersFilterByStack al 'ExplorerController', que es el que tiene el contacto directo con mi servidor.


![image](https://user-images.githubusercontent.com/99162884/167275620-7be2bb2a-07e5-4c31-8515-3e72fc4724f3.png)


6. Despues agregue a mi server.js, un nuevo endPoint que consumierá ese nuevo servicio GET, agregando una nueva url, y llamando al metodo getExplorersFilterByStack del 'ExplorerController' 

![image](https://user-images.githubusercontent.com/99162884/167275637-a3b72faf-bb8f-4c2a-952b-89f33c31ad51.png)

7. Corrí mi servidor con el comando npm run server, y probé que funcionará.

Stack: elixir

![image](https://user-images.githubusercontent.com/99162884/167275699-e614c95b-0d1e-417d-afc3-e1e9f232c459.png)

![image](https://user-images.githubusercontent.com/99162884/167275707-fa1067fc-2923-41ae-a033-944bb4c0d7dc.png)


Stack: javascript


![image](https://user-images.githubusercontent.com/99162884/167275711-71cfa6c7-4112-4e64-b7a9-858d63ada9e3.png)


![image](https://user-images.githubusercontent.com/99162884/167275718-ac0076ed-8339-4036-9a2f-29a301148128.png)



