/**
 * Returns a string with the first letter capitalized
 * @param {Sentence} strings - Local variable used to slice and capitalize the first letter
 * @returns {Sentence} - a string with the first letter capitalized
*/
function capitalize(strings) {
    var firstLetter = strings[0].toUpperCase();
    var lastLetters = strings.slice(1);
    return firstLetter + lastLetters;
}
/**
 * Returns a string with all letters capitalized
 * @param {Sentence} strings - Local variable used to capitalize all letters
 * @returns {Sentence} - a string with all letters capitalized
*/
function allCaps(strings) {
    return strings.toUpperCase();
}
/**
 * Returns a string with all letters capitalized with a join
 * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
 * @returns {Sentence} - a string with all letters capitalized
*/
function capitalizeWords(strings) {
    var word = strings.split(' ');
    var upperCase = word.map(function (word) { return capitalize(word); });
    return upperCase.join(' ');
}
/**
 * Returns a string with all letters capitalized with a join
 * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
 * @returns {Sentence} - a string with all letters capitalized
*/
function removeExtraSpaces(strings) {
    var wordTrim = strings.trim();
    var words = wordTrim.split(' ');
    var filteredWords = words.filter(function (c) { return c !== ''; });
    return filteredWords.join(' ');
}
/**
 * Returns a string that is kebab case
 * @param {Sentence} strings - Local variable used to store the kebab case
 * @returns {Sentence} - strings that are kebab cased
*/
function kebobCase(strings, seperator) {
    if (seperator === void 0) { seperator = '-'; }
    var lower = strings.toLowerCase();
    // Used to match sequences of word characters
    var words = lower.match(/[\w]+/g);
    // If words then join with an hyphen else return ''
    return words ? words.join(seperator) : '';
}
/**
 * Returns a string that is snake case
 * @param {Sentence} strings - Local variable used to store the snake case
 * @returns {Sentence} - strings that are snake cased
*/
function snakeCase(strings) {
    return kebobCase(strings, '_');
}
/**
 * Returns a string that is camel case
 * @param {Sentence} strings - Local variable used to convert to camel case
 * @returns {Sentence} - strings that are camel cased
*/
function camelCase(strings) {
    var letter = strings.split(' ');
    var camel = letter.map(function (letter, index) {
        // If index equals zero then keep it lower cased
        if (index === 0) {
            return letter.toLowerCase();
        }
        else {
            // If the index is not zero then capitalize the first letter
            // and convert the rest to lower case
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
    });
    return camel.join('');
}
/**
 * Returns a string that shifts
 * @param {Sentence} strings - Local variable used to help shift letters
 * @returns {Sentence} - strings that are shifted
*/
function shift(strings) {
    var firstLetter = strings.slice(0, 1);
    var letter = strings.slice(1);
    return letter + firstLetter;
}
/**
 * Returns a string that begins with an uppercase letter and has a hashtag in the beginning
 * @param {Sentence} strings - Local variable used to help modify the string
 * @returns {Sentence} - strings that have a hashtag in the beginning
*/
function makeHash(strings) {
    return strings.split(' ')
        .sort(function (string1, string2) { return string2.length - string1.length; })
        .map(function (word) { return "#".concat(word.toLowerCase()); })
        .slice(0, 3);
}
/**
 * Checks if a string is empty, has whitespace only and matches \n or \r or \t
 * @param {Sentence} strings - Local variable used to help check the string
 * @returns {Sentence} - a boolean
*/
function isEmpty(strings) {
    for (var i = 0; i < strings.length; i += 1) {
        if (!strings[i] || !strings[i].trim()) {
            return true;
        }
        else if (strings[i] === '\n' || strings[i] === '\r' || strings[i] === '\t') {
            return true;
        }
        else {
            return false;
        }
    }
    return true;
}

export { allCaps, camelCase, capitalize, capitalizeWords, isEmpty, kebobCase, makeHash, removeExtraSpaces, shift, snakeCase };
//# sourceMappingURL=bundle.esm.js.map
