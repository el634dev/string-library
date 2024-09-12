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

// -------------------------------
test("Should capitalize all first letters", () => {
    const myString = new Sentence();
    expect(myString.capitalizeWords("as i was walking")).toBe("As I Was Walking")
})

// -------------------------------
test("Should capitalize all letters with a space between", () => {
    const myString = new Sentence();
    expect(myString.removeExtraSpaces("   Hello     world!   ")).toBe("Hello world!")
    expect(myString.removeExtraSpaces("   Hello     Jane   ")).toBe("Hello Jane")
})

// -------------------------------
test("Should convert letters to kebob-case", () => {
    const myString = new Sentence();
    expect(myString.kebobCase("   Hello   world!!!! ")).toBe("hello-world")
    expect(myString.kebobCase("Purple-Color")).toBe("purple-color")
})

// -------------------------------
test("Should convert letters to snake_case", () => {
    const myString = new Sentence();
    expect(myString.snakeCase("  what the    heck   ")).toBe("what_the_heck")
    expect(myString.snakeCase("  tell  me    why   ")).toBe("tell_me_why")
})

// -------------------------------
test("Should convert letters to camelCase", () => {
    const myString = new Sentence();
    expect(myString.camelCase("Camel Case")).toBe("camelCase")
    expect(myString.camelCase("Dog Cat")).toBe("dogCat")
})

// -------------------------------
test("Should shift letters", () => {
    const myString = new Sentence();
    expect(myString.shift("Hello World")).toBe("ello WorldH")
    expect(myString.shift("Hello")).toBe("elloH")
})

// -------------------------------
test("Should convert the given string to a hash tag", () => {
    const myString = new Sentence();
    expect(myString.makeHash("Amazing bongo drums for sale")).toBe(['#amazing', '#bongo', '#drums'])
})

// -------------------------------
test("Should return true if the string given has whitespace only or is empty", () => {
    const myString = new Sentence();
    expect(myString.isEmpty("Abc def")).toBe(false)
    expect(myString.isEmpty("Hello")).toBe(false)
    expect(myString.isEmpty("\n")).toBe(true)
    expect(myString.isEmpty("\r")).toBe(true)
    expect(myString.isEmpty("\t")).toBe(true)
})
