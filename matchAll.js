// String.matchAll(regex) is used for match 
// between regular expression and the string object
// matchAll() will return an array with some information about the match inside
// and it will return an iterable of matches containing the results of that search.
// when matchAll() fails it returns empty array []


// examples
const string = "The rain in SPAIN stays mainly in the plain";

console.log([...string.matchAll("ain")]); 
// matchAll() will convert this into regular expression like this by adding global modifier
// string.matchAll(/ain/g)
/* 
[
  [
    'ain',
    index: 5,
    input: 'The rain in SPAIN stays mainly in the plain',
    groups: undefined
  ],
  [
    'ain',
    index: 25,
    input: 'The rain in SPAIN stays mainly in the plain',
    groups: undefined
  ],
  [
    'ain',
    index: 40,
    input: 'The rain in SPAIN stays mainly in the plain',
    groups: undefined
  ]
]
*/

console.log([...string.matchAll(/w/gi)]); // []