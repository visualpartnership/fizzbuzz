const ExplorerController = require ("./controllers/ExplorerController"),
    express = require ("express");
const app = express ();
app.use (express.json ());
const port = 3000;

app.get ("/", (request, response) => {
    response.json ({message: "FizzBuzz Api welcome!"});
});

app.get ("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission,
        explorersInMission = ExplorerController.getExplorersByMission (mission);
    response.json (explorersInMission);
});

app.get ("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission,
        explorersAmountInMission = ExplorerController.getExplorersAmonutByMission (mission);
    response.json ({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get ("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission,
        explorersUsernames = ExplorerController.getExplorersUsernamesByMission (mission);
    response.json ({mission: request.params.mission, explorers: explorersUsernames});
});

app.get ("/v1/fizzbuzz/:score", (request, response) => {
    const score = parseInt (request.params.score),
        fizzbuzzTrick = ExplorerController.applyFizzbuzz (score);
    response.json ({score: score, trick: fizzbuzzTrick});
});

app.get ("/v1/explorers/stack/:technology", (request, response) => {
    const technology = request.params.technology,
        javascriṕtStackExplorers = ExplorerController.getExplorersByStack (technology);
    response.json ({technology: technology, explorers: javascriṕtStackExplorers});
});

const server = app.listen (port, () => {
    console.log (`FizzBuzz API in localhost:${port}`);
});

module.exports = {app, server};