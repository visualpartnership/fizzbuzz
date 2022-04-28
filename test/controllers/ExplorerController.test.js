const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe("Unit Test for ExplorerController class", () => {
	
	test("1) Test of filterByMission method", () => {
		const mission = "java";
		const result = ExplorerController.getExplorerByMission(mission)
		expect(result[0]).toBe("Woopa6")
	});
	test("2) Test of applyFizzbuzz method", ()=>{
		const score = 15;
		const result = ExplorerController.applyFizzbuzz(score)
		expect(result).toBe("FIZZBUZZ")
	});
	test("3) Test of usernameByMission Method", ()=>{
		const mission = "java"
		const result = ExplorerController.getExplorersUsernameByMission(mission)
		expect(result[0]).toBe("ajolonauta6")
	});
	test("4) Test of amountByMission Method" ,() =>{
		const mission = "java"
		const result = ExplorerController.getExplorersAmountByMission(mission)
		expect(10).toBe(5)
	});




})
