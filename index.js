const app = require("../lib/server");
const port = 3000;

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});