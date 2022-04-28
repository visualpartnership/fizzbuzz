const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
	test("Requerimiento 2: filtra por misión y retornar username", () => {
		const explorers = [{mission: "node", githubUsername: "user1"},
			{mission: "java", githubUsername : "user2"}, 
			{mission: "node", githubUsername: "user3"}]
		const result = ExplorerService.getExplorersUsernamesByMission(explorer,"node")
		expect(result).toBe(["user1","user3"])
	});


});
