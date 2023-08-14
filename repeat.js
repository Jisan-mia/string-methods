// String.repeat(count) is used whenever we want to do more copies of a string
// it takes a count parameter which defines the number copies of the string should be done
// returns new string by not modifying original string
// if 0 or no parameter is passed repeat() will return empty string
// if decimal number is passed, repeat() will convert this into an integer
// -1 as counter will return RangeError


// examples
const string = 'hello'
const fiveCopies = string.repeat(5) // hellohellohellohellohello
console.log(fiveCopies)

console.log(string.repeat()) // ''
console.log(string.repeat(1)); // hello
console.log(string.repeat(2.5)); // helohelo
console.log(string.repeat(-1)); // RangeError
console.log(string.repeat(1/0)); // RangeError

