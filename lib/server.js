const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: explorersUsernames});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = parseInt(request.params.score);
    const fizzbuzzTrick = ExplorerController.applyFizzbuzz(score);
    response.json({score: score, trick: fizzbuzzTrick});
});

// Crea un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack
// localhost:3000/v1/explorers/stack/javascript.
app.get("/v1/explorers/stack/:mission", (req,res) => {
    const mission= req.params.mission;
    const ExplorersByStack = ExplorerController.getExplorersByStack(mission);
    res.json(ExplorersByStack);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

