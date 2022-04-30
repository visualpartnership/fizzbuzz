const express = require('express');
const ExplorerController = require('./controllers/ExplorerController');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (request, response) => {
  response.json({ message: 'FizzBuzz Api welcome!' });
});

app.get('/v1/explorers/:mission', (request, response) => {
  const { mission } = request.params;
  const explorersInMission = ExplorerController.getExplorersByMission(mission);
  response.json(explorersInMission);
});

app.get('/v1/explorers/amount/:mission', (request, response) => {
  const { mission } = request.params;
  const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
  response.json({ mission: request.params.mission, quantity: explorersAmountInMission });
});

app.get('/v1/explorers/usernames/:mission', (request, response) => {
  const { mission } = request.params;
  const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
  response.json({ mission: request.params.mission, explorers: explorersUsernames });
});

app.get('/v1/fizzbuzz/:score', (request, response) => {
  const score = parseInt(request.params.score);
  const fizzbuzzTrick = ExplorerController.applyFizzbuzz(score);
  response.json({ score, trick: fizzbuzzTrick });
});

app.get('/v1/explorers/stack/:selectStack', (request, response) => {
  const stack = request.params.selectStack;
  const explorersStack = ExplorerController.getExplorersByStack(stack);
  response.json({ stack, explorers: explorersStack });
});

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`);
});
