class Strings {
    constructor(string) {
        this._string = string
    }

    /**
     * Returns a string with the first letter capitalized
     * @param {Strings} str - Local variable used to slice and capitalize the first letter
     * @returns {Date} - string with the first letter capitalized
    */
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
