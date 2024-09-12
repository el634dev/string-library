(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var Sentence = /** @class */ (function () {
        function Sentence(strings) {
            this._strings = new String();
        }
        /**
         * Returns a string with the first letter capitalized
         * @param {Sentence} strings - Local variable used to slice and capitalize the first letter
         * @returns {Sentence} - a string with the first letter capitalized
        */
        Sentence.prototype.capitalize = function (strings) {
            var firstLetter = strings[0].toUpperCase();
            var lastLetters = strings.slice(1);
            return firstLetter + lastLetters;
        };
        /**
         * Returns a string with all letters capitalized
         * @param {Sentence} strings - Local variable used to capitalize all letters
         * @returns {Sentence} - a string with all letters capitalized
        */
        Sentence.prototype.allCaps = function (strings) {
            return strings.toUpperCase();
        };
        /**
         * Returns a string with all letters capitalized with a join
         * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
         * @returns {Sentence} - a string with all letters capitalized
        */
        Sentence.prototype.capitalizeWords = function (strings) {
            var _this = this;
            var word = strings.split(' ');
            var upperCase = word.map(function (word) { return _this.capitalize(word); });
            return upperCase.join(' ');
        };
        /**
         * Returns a string with all letters capitalized with a join
         * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
         * @returns {Sentence} - a string with all letters capitalized
        */
        Sentence.prototype.removeExtraSpaces = function (strings) {
            var wordTrim = strings.trim();
            var words = wordTrim.split(' ');
            var filteredWords = words.filter(function (c) { return c !== ''; });
            return filteredWords.join(' ');
        };
        /**
         * Returns a string that is kebab case
         * @param {Sentence} strings - Local variable used to store the kebab case
         * @returns {Sentence} - strings that are kebab cased
        */
        Sentence.prototype.kebobCase = function (strings, seperator) {
            if (seperator === void 0) { seperator = '-'; }
            var lower = strings.toLowerCase();
            // Used to match sequences of word characters
            var words = lower.match(/[\w]+/g);
            // If words then join with an hyphen else return ''
            return words ? words.join(seperator) : '';
        };
        /**
         * Returns a string that is snake case
         * @param {Sentence} strings - Local variable used to store the snake case
         * @returns {Sentence} - strings that are snake cased
        */
        Sentence.prototype.snakeCase = function (strings) {
            return this.kebobCase(strings, '_');
        };
        /**
         * Returns a string that is camel case
         * @param {Sentence} strings - Local variable used to convert to camel case
         * @returns {Sentence} - strings that are camel cased
        */
        Sentence.prototype.camelCase = function (strings) {
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
        };
        /**
         * Returns a string that shifts
         * @param {Sentence} strings - Local variable used to help shift letters
         * @returns {Sentence} - strings that are shifted
        */
        Sentence.prototype.shift = function (strings) {
            var firstLetter = strings.slice(0, 1);
            var letter = strings.slice(1);
            return letter + firstLetter;
        };
        /**
         * Returns a string that begins with an uppercase letter and has a hashtag in the beginning
         * @param {Sentence} strings - Local variable used to help modify the string
         * @returns {Sentence} - strings that have a hashtag in the beginning
        */
        Sentence.prototype.makeHash = function (strings) {
            var words = strings.split(' ');
            var stringHash = words.sort(function (string1, string2) { return string2.length - string1.length; });
            return stringHash.join("#");
        };
        /**
         * Checks if a string is empty, has whitespace only and matches \n or \r or \t
         * @param {Sentence} strings - Local variable used to help check the string
         * @returns {Sentence} - a boolean
        */
        Sentence.prototype.isEmpty = function (strings) {
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
        };
        return Sentence;
    }());
    module.exports.Sentence = Sentence;

}));
//# sourceMappingURL=bundle.umd.js.map
