// Testing string library, remove "type": "module" before running and after just add
const stringLib = require('../src/index');

// Returns a string with the first letter capitalized
const capitalizedFirst = stringLib.capitalize('golden')
console.log(capitalizedFirst)

// Returns a string with all letters capitalized
const capitalized = stringLib.allCaps('evacuate')
console.log(capitalized)

// Returns a string with all letters capitalized with a join
const joinString = stringLib.capitalizeWords('a canal with a dog')
console.log(joinString)

//  Returns a string that begins with an uppercase letter and has a hashtag in the beginning
const hashString = stringLib.makeHash('js')
console.log(hashString)
