// String.normalize(form) // form => NFC/NFD default NFC
// Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms

// examples
// before normalization
let str1 = '\u00c7' // Ç
console.log(str1.length) // 1

let str2 = '\u0043\u0327' // ̧C = C + ̧
console.log(str2.length); // 2


// after normalization
str1 = str1.normalize()
console.log(str1.length) // 1
console.log(str1.codePointAt(0)) // 199

str2 = str2.normalize()
console.log(str2.length) // 1
console.log(str2.codePointAt(0)) // 199


str1 = str1.normalize('NFD')
console.log(str1.length)
console.log(str1.codePointAt(0)); // 67
console.log(str1.codePointAt(1)); // 807
