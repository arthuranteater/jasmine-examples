describe("calculator", function () {

    beforeEach(function () {
        Calculator.currentVal = 5;
    });

    // afterEach(function () {
    //     Calculator.currentVal = 5;
    // });

    //toBeDefined:  
    it("Should retain the current value of all time", function () {
        expect(Calculator.currentVal).toBeDefined();
        expect(Calculator.currentVal).toEqual(Calculator.currentVal);
    });
    //toEqual: 
    it("Should add numbers", function () {
        expect(Calculator.add(5)).toEqual(10);
        expect(Calculator.add(5)).toEqual(15);
    });
    //toEqual:  
    it("Should add any number of numbers", function () {
        expect(Calculator.addAny(1, 2, 3)).toEqual(11);
    });
    //not.toEqual:
    it("Should not equal", function () {
        expect(Calculator.addAny(1, 2, 3)).not.toEqual(5)
    })
    //toBe: not sure how toBe is any different
    it("Should be exactly equal to", function () {
        expect(Calculator.strnumber).toBe("0123")
        expect(Calculator.strnumber).toEqual("0123")
    })
    //toBeTruthy
    it("Should be truthy", function () {
        expect(Calculator.boolean).toBeTruthy()
        //expect(Calculator.boolean).toBeFalsy()
    })
    //toContain:
    it("Should contain", function () {
        expect(Calculator.strnumber).toContain("0", "2")
    })
    //toBeCloseTo:
    it("Decimal should be close to", function () {
        expect(Calculator.decimal).toBeCloseTo(1)
    })
    //toMatch: can use regex like syntax /word/
    it("Should match", function () {
        expect(Calculator.strnumber).toMatch("01")
        expect(Calculator.strnumber).toMatch(/01/)
    })
    //toBeNull
    //toBeGreaterThan
    //toBeLessThan
    //toBeNaN

    //toThrow: exceptions
    it("Should throw error", function () {
        expect(Calculator.badFunction).toThrow()
    })
    //jasmine.Any
    it("Should check type", function () {
        expect(Calculator.decimal).toEqual(jasmine.any(Number))
    })


}); 