
/**
 * Returns a string with the first letter capitalized
 * @param {Sentence} strings - Local variable used to slice and capitalize the first letter
 * @returns {Sentence} - a string with the first letter capitalized
*/
function capitalize(strings: string): string {
    const firstLetter = strings[0].toUpperCase()
    const lastLetters = strings.slice(1)

    return firstLetter + lastLetters
}

/**
 * Returns a string with all letters capitalized
 * @param {Sentence} strings - Local variable used to capitalize all letters
 * @returns {Sentence} - a string with all letters capitalized
*/
function allCaps(strings: string): string {
    return strings.toUpperCase()
}

/**
 * Returns a string with all letters capitalized with a join
 * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
 * @returns {Sentence} - a string with all letters capitalized
*/
function capitalizeWords(strings: string): string {
    const word = strings.split(' ');
    const upperCase = word.map((word) => capitalize(word));

    return upperCase.join(' ')
}

/**
 * Returns a string with all letters capitalized with a join
 * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
 * @returns {Sentence} - a string with all letters capitalized
*/
function removeExtraSpaces(strings: string): string {
    const wordTrim = strings.trim();
    const words = wordTrim.split(' ');

    const filteredWords = words.filter((c) => c !== '')
    return filteredWords.join(' ')
}

/**
 * Returns a string that is kebab case
 * @param {Sentence} strings - Local variable used to store the kebab case
 * @returns {Sentence} - strings that are kebab cased
*/
function kebobCase(strings: string, seperator = '-'): string {
    const lower = strings.toLowerCase();
    // Used to match sequences of word characters
    const words = lower.match(/[\w]+/g)

    // If words then join with an hyphen else return ''
    return words ? words.join(seperator) : ''
}

/**
 * Returns a string that is snake case
 * @param {Sentence} strings - Local variable used to store the snake case
 * @returns {Sentence} - strings that are snake cased
*/
function snakeCase(strings: string): string {
    return kebobCase(strings, '_')
}

/**
 * Returns a string that is camel case
 * @param {Sentence} strings - Local variable used to convert to camel case
 * @returns {Sentence} - strings that are camel cased
*/
function camelCase(strings: string): string {
    const letter = strings.split(' ');
    const camel = letter.map((letter, index) => {
        // If index equals zero then keep it lower cased
        if (index === 0) {
            return letter.toLowerCase()
        } else {
            // If the index is not zero then capitalize the first letter
            // and convert the rest to lower case
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
    });

    return camel.join('')
}

/**
 * Returns a string that shifts
 * @param {Sentence} strings - Local variable used to help shift letters
 * @returns {Sentence} - strings that are shifted
*/
function shift(strings: string): string {
    const firstLetter = strings.slice(0, 1);
    const letter = strings.slice(1);

    return letter + firstLetter;
}

/**
 * Returns a string that begins with an uppercase letter and has a hashtag in the beginning
 * @param {Sentence} strings - Local variable used to help modify the string
 * @returns {Sentence} - strings that have a hashtag in the beginning
*/
function makeHash(strings: string): string[] {
    return strings.split(' ')
        .sort((string1, string2) => string2.length - string1.length)
        .map(word => `#${word.toLowerCase()}`)
        .slice(0, 3)
}

/**
 * Checks if a string is empty, has whitespace only and matches \n or \r or \t
 * @param {Sentence} strings - Local variable used to help check the string
 * @returns {Sentence} - a boolean
*/
function isEmpty(strings: string): boolean {
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


export { 
    capitalize, 
    allCaps, 
    capitalizeWords, 
    removeExtraSpaces, 
    kebobCase, 
    snakeCase, 
    camelCase, 
    shift, 
    makeHash, 
    isEmpty 
};
