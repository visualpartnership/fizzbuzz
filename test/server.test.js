const request = require("supertest");
const app = require("../lib/server");
const http = request(app);

describe("Unit Tests for FizzBuzz API", () => {
    test("GET /v1/explorers/stack/:stack", async () => {
        const stack = "javascript";
        const res = await http.get(`/v1/explorers/stack/${stack}`);
        expect(res.body.stack).toBe("javascript");
        expect(res.body.explorers.length).toBeDefined();
    });
});