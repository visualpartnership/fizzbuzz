const { app, server } = require("../lib/server");
const supertest = require("supertest");
const api = supertest(app);

describe("GET /v1/explorers/stack/javascript", () => {
    it("Deberia devolver a todos los explorers que en su stack este Javascript", async () => {
        const response = await api.get("/v1/explorers/stack/javascript").send();

        expect(response.status).toBe(200);
        expect(response.type).toEqual(expect.stringContaining("json"));
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).not.toHaveLength(0);
        expect(response.body[0].stacks).toEqual(expect.arrayContaining(["javascript"]));
    });
});

afterAll(() => {
    server.close();
});