// String.toLocaleUpperCase(local)
// Converts all alphabetic characters to uppercase, taking into account the host environment's current locale.
// toLocaleUpperCase() returns a new string without changing the original string

// example
const string = "istanbul";
console.log(string.toLocaleUpperCase("en-US")); // ISTANBUL

console.log(string.toLocaleUpperCase("tr")); // İSTANBUL
