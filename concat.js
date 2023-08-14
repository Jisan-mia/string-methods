// String.concat(str1, str2, strN) is used to concatenate strings
// it returns a new string and doesn't modify original strings

// example
const str1 = 'Hello'
const str2 = 'World!'
const concatenatedStr = str1.concat(' ', str2) // Hello World!
console.log(concatenatedStr)


/* Performance notes
it is strongly recommended to use assignment operators (+, +=) instead of the concat() method
  
*/