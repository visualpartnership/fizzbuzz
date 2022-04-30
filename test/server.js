const app = require("./../lib/server");
const request = require("supertest");

describe("Probar rutas del servidor", () => {
    test("Filtrar explorers por stack javascript", (done) => {
        request(app)
            .get("/v1/explorers/stack/javascript")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(11);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Filtrar explorers por stack ReasonML", (done) => {
        request(app)
            .get("/v1/explorers/stack/reasonML")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(9);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Filtrar explorers por stack Elm", (done) => {
        request(app)
            .get("/v1/explorers/stack/elm")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(12);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Filtrar explorers por stack Groovy", (done) => {
        request(app)
            .get("/v1/explorers/stack/groovy")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(9);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Filtrar explorers por stack Elixir", (done) => {
        request(app)
            .get("/v1/explorers/stack/elixir")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(9);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
});