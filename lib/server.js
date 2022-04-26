
const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission",(request,response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission)
});

app.get("/v1/explorers/amount/:mission",(request,response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission",(request,response) => {
    const mission = request.params.mission;
    const ExplorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: ExplorersUsernamesByMission});
});

app.get("/v1/fizzbuzz/:number",(request,response) => {
    const number = request.params.number;
    const applyValidationInNumber = ExplorerController.applyValidationInNumber(number);
    response.json({score: request.params.number, trick: applyValidationInNumber});
});

app.get("/v1/explorers/stack/:stack",(request,response) => {
    const stack = request.params.stack;
    const filterByStact = ExplorerController.filterByStact(stack);
    response.json({stack: request.params.stack, explorers: filterByStact});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});