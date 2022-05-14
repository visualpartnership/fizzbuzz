**STEAKS**

Se agrega una nueva url para buscar dentro del archivo **explorers.json** atraves del campo stacks.

```
http://localhost:3000/v1/explorers/steak/javascript
```

Se crea una función **static** dentro del **ExplorerService.js**

```
static steack(explorers,mission){
	constexplorerBySteak =  explorers.filter((explorer)=>explorer.stacks.includes(mission));
	returnexplorerBySteak;
 }
```

Agrego la función **stack** dentro del **ExplorerController**

```
    static stack(lenguage){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.steack(explorers,lenguage)
    }
```

Configuro la ruta dentro del **server.js, localhost:3000/v1/explorers/steak/**

que recibe como parametro el campo que puede contener el steak

```
app.get("/v1/explorers/steak/:mission",(request, response)=>{
    const mission = request.params.mission;
    const result =  ExplorerController.stack(mission);
    response.json(result);
});
```


