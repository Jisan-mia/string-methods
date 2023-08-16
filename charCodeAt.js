// String.codePointAt(index) is UTF-16 based and range is from 0 to 65535
// Returns the Unicode value of the character at the specified location.
// when parameter index is not passed by default it would be 0 index
// if there is no element at the position(index) it'll return NaN

// examples
const str = 'Ok 👍'
console.log(str.length) // 5
console.log(str.codePointAt(0)); // 79
console.log(str.codePointAt(1)); // 107
console.log(str.codePointAt(2)); // 32
console.log(str.codePointAt(3)); // 55357
console.log(str.codePointAt(4)); // 56397
console.log(str.codePointAt(5)); // NaN
console.log(str.codePointAt()); // 99
