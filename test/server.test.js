const request = require ("supertest"),
    {app, server} = require ("../lib/server");

describe ("Test's suite for API", () => {
    test ("Test if endpoint GET /v1/explorers/:mission returns a list with explorers", async () => {
        const response = await request (app).get ("/v1/explorers/node").send ();
        expect (response._body.length).toBe (10);
    });

    test ("Getting amount of explorers in Java GET /v1/explorers/amount/:mission", async () => {
        const response = await request (app).get ("/v1/explorers/amount/java").send ();
        expect (response._body.quantity).toBe (5);
    });

    test ("Checking if the response of GET /v1/explorers/usernames/node has the usernames of 10 explorers", async () => {
        const githubUsernamesOfNodeExplorers = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"],
            response = await request (app).get ("/v1/explorers/usernames/node").send ();
        expect (response._body.explorers).toEqual (expect.arrayContaining (githubUsernamesOfNodeExplorers));
    });

    test ("Testing endpoint /v1/fizzbuzz/:score", async () => {
        const responseFizz = await request (app).get ("/v1/fizzbuzz/3").send (),
            responseBuzz = await request (app).get ("/v1/fizzbuzz/5").send (),
            responseFizzBuzz = await request (app).get ("/v1/fizzbuzz/15").send (),
            responseNonFizzBuzz = await request (app).get ("/v1/fizzbuzz/7").send ();
        
        expect (responseFizz._body.trick).toBe ("FIZZ");
        expect (responseBuzz._body.trick).toBe ("BUZZ");
        expect (responseFizzBuzz._body.trick).toBe ("FIZZBUZZ");
        expect (responseNonFizzBuzz._body.trick).toBe (7);
    });

    test ("Testing endpoint /v1/explorers/stack/:technology", async () => {
        const expected = [{"name": "Woopa1"}, {"name": "Woopa2"}, {"name": "Woopa4"}, {"name": "Woopa5"}, {"name": "Woopa9"}, 
                {"name": "Woopa10"}, {"name": "Woopa11"}, {"name": "Woopa12"}, {"name": "Woopa13"}, {"name": "Woopa14"}, {"name": "Woopa15"}],
            javascriptStackExplorers = await request (app).get ("/v1/explorers/stack/javascript").send (),
            result = javascriptStackExplorers._body.explorers;

        for(let explorer = 0; explorer < result.length; explorer++){
            expect (result[explorer].name).toBe (expected[explorer].name);
        }

        expect (result.length).not.toBe (0);

    });
});

afterAll ( () => {
    server.close ();
});