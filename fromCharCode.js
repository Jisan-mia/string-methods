// String.fromCharCode(num) is used whenever we want to get 
// actual value from a unicode


// examples
console.log(String.fromCharCode(79)) // 'O'
console.log(String.fromCharCode(107)) // 'k'
console.log(String.fromCharCode(32)) // '  '
console.log(String.fromCharCode(55357)); // �
console.log(String.fromCharCode(56397)) // 'k'

console.log(String.fromCharCode(79, 107, 32, 55357, 56397)) // 'Ok 👍
