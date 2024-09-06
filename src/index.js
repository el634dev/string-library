class Strings {
    constructor(string) {
        this._string = string
    }

    capitalize(str) {
        const firstLetter = str[0].toUpperCase()
        const lastLetters = str.slice(1)

        return firstLetter + lastLetters
    }

    allCaps(str) {
        return str.toUpperCase()
    }
}

module.exports.Strings = Strings;