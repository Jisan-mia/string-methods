// String.slice() method extracts a section of a string and returns as a new string so they don't change the original string

// syntax
// String.slice(indexStart, indexEnd)
// - indexStart is the position from where we want to start taking a slice from the original string
// - if negative index is given, slice() will go from the end of the string, end character will index will be -1, second last character index will be -2 and so on
// - indexEnd is the position where we want slice() to stop slicing the string
// - the indexEnd'th will be excluded
// if indexStart is getter than indexEnd, then slice() will return ''(empty string)


// example
const string = 'The morning is upon us.'
console.log(string.slice(12)) // is upon us.
console.log(string.slice(-11)) // is upon us.
console.log(string.slice(13, 16)) // s u
console.log(string.slice(16, 13)) // ''
console.log(string.slice(-8, -4)) // 'upon'
console.log(string.slice(-8, 4)) // ''
console.log(string.slice(8, -4)) // 'ing is upon'




