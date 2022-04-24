const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

// ESTO ES UN ENDPOINT
//routes
// Methods HTTP: GET, POST, PUT, DELETE
//app.get('/v1/explorers', (req, res) => {
//    console.log(`GET Explorers V1 API ${new Date()}`)
//    const explorer1 = { id: 1, name: "Explorer1" }
//    const explorer2 = { id: 2, name: "Explorer2" }
//    const explorers = [explorer1, explorer2]
//    // HTTP CODE STATUS: 200
//    res.status(200).json(explorers)
//})
//
//app.get('/v1/explorers/:id', (req, res) => {
//    console.log(`GET BY ID Explorers V1 API ${new Date()}`)
//    const explorer1 = { id: 1, name: "Explorer1" }
//    // HTTP CODE STATUS: 200
//    res.status(200).json(explorer1)
//})
//
//app.post('/v1/explorers', (req, res) => {
//    console.log(`POST Explorers V1 API ${new Date()}`)
//    // Agregar la lógica para persistir
//    console.log(req.body) //parámetros del requesrt
//    res.status(201).json({ message: "Creado exitosamente" })
//})
//
//app.put('/v1/explorers/:id', (req, res) => {
//    console.log(`PUT Explorers V1 API ${new Date()}`)
//    console.log(req.body) // parametros para actualizar
//    console.log(req.params.id) // query params
//    // Agregar la lógica para actualizar
//    res.status(200).json({ message: "Actualizado exitosamente" })
//})
//
//app.delete('/v1/explorers/:id', (req, res) => {
//    console.log(`DELETE Explorers V1 API ${new Date()}`)
//    // Agregar la lógica para eliminar el registro enviado
//    res.status(200).json({ message: "Se eliminó exitosamente" })
//})



// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Server in execution in localhost:${port}`)
})

