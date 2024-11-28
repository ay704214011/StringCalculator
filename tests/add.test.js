const add = require("../src/Add");

describe("String Calculator TDD", () => {
    test("returns 0 if no string passed as input", () => {
        expect(add()).toBe(0);
    });
    
    test("returns 0 if empty string gets passed", () => {
        expect(add("")).toBe(0);
    });

    test("should return same number if passed single number", () => {
        expect(add("1")).toBe(1);
        expect(add("3")).toBe(3);
    });

    test("should return SUM of all passed numbers by default comma seperated", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("0,3,5")).toBe(8);
    });

    test("should accept new line character", () => {
        expect(add("1\n,2,3")).toBe(6);
    });

    test("should accept new delimiter starting with //", () => {
        expect(add("//;1\n;2;3")).toBe(6);
    });

    test("should throw error if any negative number found", () => {
        expect(() => {
            add("1, -3, -2")
        }).toThrow();
    });

    test("should display negative numbers in error", () => {
        expect(() => {
            add("1, -3, -2")
        }).toThrow("negative numbers not allowed: -3, -2");
    });
});
