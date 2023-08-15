// referenceString.localCompare(compareString) is used whenever we want to compare two strings
// localCompare() returns a numeric value
// if the referenceString occurs before compareString it will return a negative value (-1/-2/-3)
// if the referenceString occurs after compareString it will return a positive value (+1/+2)
// if the referenceString is equivalent to compareString it will return 0


// examples
const a = 'a'
const b = 'b'

console.log(a.localeCompare(b)) // -1
console.log(b.localeCompare(a)) // 1
console.log(a.localeCompare(a)) // 0

