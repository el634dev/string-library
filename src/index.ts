class Sentence {
    private _strings: String;

    constructor(strings: string) {
        this._strings = new String();
    }

    /**
     * Returns a string with the first letter capitalized
     * @param {Sentence} strings - Local variable used to slice and capitalize the first letter
     * @returns {Sentence} - string with the first letter capitalized
    */
    capitalize(strings: string): string{
        const firstLetter = strings[0].toUpperCase()
        const lastLetters = strings.slice(1)

        return firstLetter + lastLetters
    }

    /**
     * Returns a string with all letters capitalized
     * @param {Sentence} string - Local variable used to capitalize all letters
     * @returns {Sentence} - string with all letters capitalized
    */
    allCaps(strings: string): string {
        return strings.toUpperCase()
    }

     /**
     * Checks if a string is empty, has whitespace only and matches \n or \r or \t
     * @param {Sentence} strings - Local variable used to help check the string
     * @returns {Sentence} - a boolean
    */
    isEmpty(strings: string): boolean {
       for (let i: number = 0; i < strings.length; i += 1) {
            if (!strings[i] || !strings[i].trim()) {
                return true
            } else if (strings[i] === '\n' || strings[i] === '\r' || strings[i] === '\t') {
                return true;
            } else {
                return false
            }
       }
       return true
    }
}

module.exports.Sentence = Sentence;
