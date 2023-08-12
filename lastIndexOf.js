// String.lastIndexOf(searchString) takes a parameter searchString
// and it searches the searchString inside the string starting from the right/end
// and returns the index value of the searchString from last occurrence if found, if not returns -1
// if noting passed as parameter, parameter will be undefined

// example
const string = "The code undefined code code";
console.log(string.lastIndexOf("code")); // 24
console.log(string.lastIndexOf("Code")); // -1
console.log(string.lastIndexOf("")); // 28
console.log(string.lastIndexOf()); // 9 // since undefined automatically passed and 'undefined' is in the string and matched it.
