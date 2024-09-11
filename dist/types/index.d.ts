declare class Sentence {
    private _strings;
    constructor(strings: string);
    /**
     * Returns a string with the first letter capitalized
     * @param {Sentence} strings - Local variable used to slice and capitalize the first letter
     * @returns {Sentence} - string with the first letter capitalized
    */
    capitalize(strings: string): string;
    /**
     * Returns a string with all letters capitalized
     * @param {Sentence} string - Local variable used to capitalize all letters
     * @returns {Sentence} - string with all letters capitalized
    */
    allCaps(strings: string): string;
}
