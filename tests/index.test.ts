const { Sentence } = require("../src/index");

test("Should capitalize the first letter", () => {
    const myString = new Sentence();
    expect(myString.capitalize("hello world")).toBe("Hello world")
})

// -------------------------------
test("Should capitalize all letters", () => {
    const myString = new Sentence();
    expect(myString.allCaps("hello")).toBe("HELLO")
})