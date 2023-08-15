// String.padStart(targetLength, padString) is used whenever we want to pad our original string 
// from the start with another string to reach a given or target length
// if targetLength is given but padString is not given, then padString will be by default space
// it returns new string not modifying original string


// examples
const string = 'abc'
console.log(string.padStart(10)) // '       abc'
console.log(string.padStart(10, 'foo')) // 'foofoofabc' 
console.log(string.padStart(10, '12345678')) // '1234567abc' 
console.log(string.padStart(2)) // 'abc' 

