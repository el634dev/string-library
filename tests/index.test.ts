const {  capitalize, 
    allCaps, 
    capitalizeWords, 
    removeExtraSpaces, 
    kebobCase, 
    snakeCase, 
    camelCase, 
    shift, 
    makeHash, 
    isEmpty  } = require("../dist/bundle.umd.js");


test("Should capitalize the first letter", () => {
    expect(capitalize("hello world")).toBe("Hello world")
})

// -------------------------------
test("Should capitalize all letters", () => {
    expect(allCaps("hello")).toBe("HELLO")
})

// -------------------------------
test("Should capitalize all first letters", () => {
    expect(capitalizeWords("as i was walking")).toBe("As I Was Walking")
})

// -------------------------------
test("Should capitalize all letters with a space between", () => {
    expect(removeExtraSpaces("   Hello     world!   ")).toBe("Hello world!")
    expect(removeExtraSpaces("   Hello     Jane   ")).toBe("Hello Jane")
})

// -------------------------------
test("Should convert letters to kebob-case", () => {
    expect(kebobCase("   Hello   world!!!! ")).toBe("hello-world")
    expect(kebobCase("Purple-Color")).toBe("purple-color")
})

// -------------------------------
test("Should convert letters to snake_case", () => {
    expect(snakeCase("  what the    heck   ")).toBe("what_the_heck")
    expect(snakeCase("  tell  me    why   ")).toBe("tell_me_why")
})

// -------------------------------
test("Should convert letters to camelCase", () => {
    expect(camelCase("Camel Case")).toBe("camelCase")
    expect(camelCase("Dog Cat")).toBe("dogCat")
})

// -------------------------------
test("Should convert letters to camelCase", () => {
    expect(camelCase("Camel Case")).toBe("camelCase")
    expect(camelCase("Dog Cat")).toBe("dogCat")
})

// -------------------------------
test("Should shift letters", () => {
    expect(shift("Hello World")).toBe("ello WorldH")
    expect(shift("Hello")).toBe("elloH")
})

// -------------------------------
test("Should convert the given string to a hash tag", () => {
    expect(makeHash("Amazing bongo drums for sale")).toEqual(['#amazing', '#bongo', '#drums'])
})

// -------------------------------
test("Should return true if the string given has whitespace only or is empty", () => {
    expect(isEmpty("Abc def")).toBe(false)
    expect(isEmpty("Hello")).toBe(false)
    expect(isEmpty("\n")).toBe(true)
    expect(isEmpty("\r")).toBe(true)
    expect(isEmpty("\t")).toBe(true)
})