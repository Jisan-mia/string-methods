// String.indexOf(searchString) takes a parameter searchString
// and it searches the searchString inside the string starting from the start/left 
// and returns the index value of the searchString from first occurrence if found, if not returns -1
// if noting passed as parameter, parameter will be undefined


// example
const string = 'The code undefined code code'
console.log(string.indexOf('code')) // 4
console.log(string.indexOf('Code')) // -1
console.log(string.indexOf('')) // 0
console.log(string.indexOf()) // 9 // since undefined automatically passed and 'undefined' is in the string and matched it.


