// String.padEnd(targetLength, padString) is used whenever we want to pad our original string
// from the end with another string to reach a given or target length
// if targetLength is given but padString is not given, then padString will be by default space
// it returns new string not modifying original string

// examples
const string = "abc";
console.log(string.padEnd(10)); // 'abc       '
console.log(string.padEnd(10, "foo")); // 'abcfoofoof'
console.log(string.padEnd(10, "12345678")); // 'abc1234567'
console.log(string.padEnd(2)); // 'abc'
