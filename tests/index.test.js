const { Strings } = require("../src/index");

test("Should capitalize the first letter", () => {
    const myString = new Strings();
    expect(myString.capitalize("hello world")).toBe("Hello world")
})

// -------------------------------
test("Should capitalize all letters", () => {
    const myString = new Strings();
    expect(myString.allCaps("hello")).toBe("HELLO")
})