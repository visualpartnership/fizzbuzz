## Contribución Open Source
# Requerimientos:
Crea un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack.

Ejemplo de url: localhost:3000/v1/explorers/stack/javascript. Response: Todos los explorers que tengan en stack el valor recibido en la url: javascript. (este valor debe ser dinámico)

Image 1.- Example

![image](https://user-images.githubusercontent.com/80854990/167319175-ec2c6f1a-3361-4d16-b245-37b2d8ab1303.png)


En ExplorerService, se creo el metodo filterByStack, el cual recibirá la lista de explorers y un valor stack, a partir de ahí crea una lista nueva filtrada con la condición de traer todos los explorers que incluyan en su arreglo stack, el valor de stack solicitado por el usuario(javascrit, elixir etc).

![image](https://user-images.githubusercontent.com/80854990/167319206-ef8769dd-bfc4-4bc6-a5eb-74612386434b.png)
