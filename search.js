// String.search(regex) is used to search for a match 
// between regular expression and the string object
// search() will always returns an index that is the index of the first match
// search() is case sensitive


// examples
const string = 'The rain in SPAIN stays mainly in the plain'


console.log(string.search('ain')) // 5 // search() will convert 'ain' into regular expression
console.log(string.search(/ain/)) // 5
console.log(string.search(/AIN/)) // 14
console.log(string.search(/AIN/i)) // 5
console.log(string.search(/w/)) // -1



