/**
 * Returns a string with the first letter capitalized
 * @param {Sentence} strings - Local variable used to slice and capitalize the first letter
 * @returns {Sentence} - a string with the first letter capitalized
*/
declare function capitalize(strings: string): string;
/**
 * Returns a string with all letters capitalized
 * @param {Sentence} strings - Local variable used to capitalize all letters
 * @returns {Sentence} - a string with all letters capitalized
*/
declare function allCaps(strings: string): string;
/**
 * Returns a string with all letters capitalized with a join
 * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
 * @returns {Sentence} - a string with all letters capitalized
*/
declare function capitalizeWords(strings: string): string;
/**
 * Returns a string with all letters capitalized with a join
 * @param {Sentence} strings - Local variable used to split the words and capitalize every letter
 * @returns {Sentence} - a string with all letters capitalized
*/
declare function removeExtraSpaces(strings: string): string;
/**
 * Returns a string that is kebab case
 * @param {Sentence} strings - Local variable used to store the kebab case
 * @returns {Sentence} - strings that are kebab cased
*/
declare function kebobCase(strings: string, seperator?: string): string;
/**
 * Returns a string that is snake case
 * @param {Sentence} strings - Local variable used to store the snake case
 * @returns {Sentence} - strings that are snake cased
*/
declare function snakeCase(strings: string): string;
/**
 * Returns a string that is camel case
 * @param {Sentence} strings - Local variable used to convert to camel case
 * @returns {Sentence} - strings that are camel cased
*/
declare function camelCase(strings: string): string;
/**
 * Returns a string that shifts
 * @param {Sentence} strings - Local variable used to help shift letters
 * @returns {Sentence} - strings that are shifted
*/
declare function shift(strings: string): string;
/**
 * Returns a string that begins with an uppercase letter and has a hashtag in the beginning
 * @param {Sentence} strings - Local variable used to help modify the string
 * @returns {Sentence} - strings that have a hashtag in the beginning
*/
declare function makeHash(strings: string): string[];
/**
 * Checks if a string is empty, has whitespace only and matches \n or \r or \t
 * @param {Sentence} strings - Local variable used to help check the string
 * @returns {Sentence} - a boolean
*/
declare function isEmpty(strings: string): boolean;
export { capitalize, allCaps, capitalizeWords, removeExtraSpaces, kebobCase, snakeCase, camelCase, shift, makeHash, isEmpty };
