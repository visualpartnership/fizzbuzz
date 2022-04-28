const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe("Unit Test for ExplorerController class", () => {
	
	test("1) Test of filterByMission method", () => {
		const mission = "java";
		const result = ExplorerController.getExplorersByMission(mission)
		expect(result[0].name).toBe("Woopa6")
	});
	test("2) Test of applyFizzbuzz method", ()=>{
		const score = 15;
		const result = ExplorerController.applyFizzbuzz(score)
		expect(result).toEqual("FIZZBUZZ")
	});
	test("3) Test of usernameByMission Method", ()=>{
		const mission = "java"
		const result = ExplorerController.getExplorersUsernamesByMission(mission)
		expect(result[0]).toBe("ajolonauta6")
	});
	test("4) Test of amountByMission Method" ,() =>{
		const mission = "java"
		const result = ExplorerController.getExplorersAmonutByMission(mission)
		expect(result).toBe(5)
	});

	test("5) Test of filteByStack method", () => {
		const stack = "reasonML"
		const result = ExplorerController.getExplorersByStack(stack)
		expect(result.lenght).toBe(9)
	});



})
