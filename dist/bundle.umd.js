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
         * @returns {Sentence} - string with the first letter capitalized
        */
        Sentence.prototype.capitalize = function (strings) {
            var firstLetter = strings[0].toUpperCase();
            var lastLetters = strings.slice(1);
            return firstLetter + lastLetters;
        };
        /**
         * Returns a string with all letters capitalized
         * @param {Sentence} string - Local variable used to capitalize all letters
         * @returns {Sentence} - string with all letters capitalized
        */
        Sentence.prototype.allCaps = function (strings) {
            return strings.toUpperCase();
        };
        return Sentence;
    }());
    module.exports.Sentence = Sentence;

}));
//# sourceMappingURL=bundle.umd.js.map
