const request = require("supertest");
const app = require("./../lib/server");

describe("== Unit Testing for server.js ==", () => {
    test("1.- Solicitud GET para '/' muestra 'status code' 200", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });

    test("2.- Solicitud GET para '/v1/explorers/node' muestra 'status code' 200", async () => {
        const response = await request(app).get("/v1/explorers/node").send();
        expect(response.statusCode).toBe(200);
    });

    test("3.- Solicitud GET para '/v1/explorers/username/node' muestra 'status code' 200", async () => {
        const response = await request(app).get("/v1/explorers/usernames/node").send();
        expect(response.statusCode).toBe(200);
    });

    test("4.- Solicitud GET para '/v1/explorers/amount/node' muestra 'status code' 200", async () => {
        const response = await request(app).get("/v1/explorers/amount/node").send();
        expect(response.statusCode).toBe(200);
    });
    test("5.- Solicitud GET para '/v1/explorers/stack/javascript' muestra 'status code' 200", async () => {
        const response = await request(app).get("/v1/explorers/stack/javascript").send();
        expect(response.statusCode).toBe(200);
    });
});
