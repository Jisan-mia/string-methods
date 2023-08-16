// String.replaceAll(searchString, replaceString) will replace all the match of the string
// searchString can be string or regular expression
// it returns a new string not modifying original string
// the second parameter can be a function and the function takes a parameter which is the match
// String.replaceAll(searchString, replaceFunction)

// examples
const string = "Mr Blue has a blue house and a blue car";
console.log(string.replaceAll("blue", "red")); // Mr Blue has a red house and a red car

const result = string.replaceAll("blue", (match) => {
  return match.toUpperCase();
});
console.log(result); // Mr Blue has a BLUE house and a BLUE car

console.log(string.replaceAll(/blue/g, "red")); // Mr Blue has a red house and a red car
console.log(string.replaceAll(/blue/gi, "red")); // Mr red has a red house and a red car
