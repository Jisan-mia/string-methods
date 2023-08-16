// String.replace(searchString, replaceString) is used whenever we want to 
// replace a substring inside our string with another string
// searchString can be string or regular expression
// it returns a new string not modifying original string
// replace only replace the first occurrence of the match
// the second parameter can be a function and the function takes a parameter which is the match
// String.replace(searchString, replaceFunction)


// examples
const string = 'Mr Blue has a blue house and a blue car'
console.log(string.replace('blue', 'red')) // Mr Blue has a red house and a blue car

const result = string.replace('blue', (match) => {
  return match.toUpperCase();
})
console.log(result) // Mr Blue has a BLUE house and a blue car

console.log(string.replace(/blue/g, 'red')) // Mr Blue has a red house and a red car
console.log(string.replace(/blue/gi, 'red')) // Mr red has a red house and a red car
