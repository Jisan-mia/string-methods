// String.substring() method extracts a section of a string and returns as a new string so they don't change the original string

// syntax
// String.substring(indexStart, indexEnd)
// - indexStart is the position from where we want to start taking a slice from the original string
// - if negative index is given, substring() assumes any negative index as 0, so extract from the start
// - indexEnd is the position where we want substring() to stop slicing the string
// - the indexEnd'th will be excluded
// if indexStart is getter than indexEnd, then substring() will swap there positions


// example
const string = "The morning is upon us.";
console.log(string.substring(12)); // is upon us.
console.log(string.substring(-11)); // is upon us.
console.log(string.substring(13, 16)) // s u
console.log(string.substring(16, 13)) // s u
console.log(string.substring(-8, -4)) // 'upon'
console.log(string.substring(-8, 4)) // 'The'
console.log(string.substring(8, -4)) // 'The morn'

