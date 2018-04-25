const ROOT = require("app-root-path")
const calculator = require(ROOT + "/server/calculator")

const assert = require("assert")

describe("Test calculator", () => {
	it("should return 2, the sum of 1 and 1", function() {
		assert.equal(calculator.add(1, 1), 2)
	})
})
