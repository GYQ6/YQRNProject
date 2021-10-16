const rewire = require("rewire")
const YQStorage = rewire("./YQStorage")
const createYQStorage = YQStorage.__get__("createYQStorage")
const initStorage = YQStorage.__get__("initStorage")
// @ponicode
describe("createYQStorage", () => {
    test("0", () => {
        let callFunction = () => {
            createYQStorage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("initStorage", () => {
    test("0", () => {
        let callFunction = () => {
            initStorage()
        }
    
        expect(callFunction).not.toThrow()
    })
})
