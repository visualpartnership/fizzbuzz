const supertest = require("supertest");
const {app, finish} = require("../lib/server");

describe("Test for server", () =>{
    test("1) Request: Explorers by stack", async () => { 
        const response = await supertest(app).get("/v1/explorers/stack/javascript");
        expect(response.body.stack).toBe("javascript");
        expect(response.statusCode).toBe(200);
        finish();
    });
});
