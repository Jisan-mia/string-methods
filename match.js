// String.match(regex) is used for match
// between regular expression and the string object
// match() will return an array with some information about the match inside
// and it will only return the first match
// when match() fails it returns null


// examples
const string = "The rain in SPAIN stays mainly in the plain";

console.log(string.match("ain")); // match() will convert 'ain' into regular expression
/* 
[
  'ain',
  index: 5,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
]
*/
console.log(string.match(/ain/)); 
console.log(string.match(/AIN/g));  // [ 'AIN' ]
console.log(string.match(/AIN/gi));  // [ 'ain', 'AIN', 'ain', 'ain' ]
console.log(string.match(/w/)); // null
