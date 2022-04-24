const ExplorerController = require('./controllers/ExplorerController')
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (request, response) => {
  res.json({message: "FizzBuzz Api welcome!"})
})

app.get('/v1/explorers/:mission', (request, response) => {
  const mission = request.params.mission
  console.log(request.params)
  const explorersInMission = ExplorerController.getExplorersByMission(mission)
  response.json(explorersInMission)
})

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`)
})

