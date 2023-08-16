// String.fromCodePoint(num) is used whenever we want to get
// actual value from a unicode

// examples
console.log(String.fromCodePoint(79)); // 'O'
console.log(String.fromCodePoint(107)); // 'k'
console.log(String.fromCodePoint(32)); // ' '
console.log(String.fromCodePoint(128077)); // 👍
console.log(String.fromCodePoint(56397)); // �

console.log(String.fromCodePoint(79, 107, 32, 55357, 56397)) // 'Ok 👍'
console.log(String.fromCodePoint(79, 107, 32, 128077)); // 'Ok 👍