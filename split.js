// String.split(separator) is used whenever we want to divide
// our string into substring based on a separator we pass into the split() method
// and split() method will return those substring ordered inside an array and returns the array
// so it doesn't modify the original array


// examples
const string = 'The morning is upon us.'
console.log(string.split()) // [ 'The morning is upon us.' ]
console.log(string.split(' ')); // [ 'The', 'morning', 'is', 'upon', 'us.' ]
console.log(string.split(''));
/* 
[
  'T', 'h', 'e', ' ', 'm',
  'o', 'r', 'n', 'i', 'n',
  'g', ' ', 'i', 's', ' ',
  'u', 'p', 'o', 'n', ' ',
  'u', 's', '.'
]
*/
console.log(string.split("o")); // [ 'The m', 'rning is up', 'n us.' ]
