﻿### Every string method in JavaScript

---

### 1. charAt

- String.charAt(index) method takes a parameter index(index position of the string) and
- returns the charter at that index from the string

#### Examples

```js
const string = "Hello World!";
console.log(string.charAt(4)); // 'o'
```

### 2. indexOf

- String.indexOf(searchString) takes a parameter searchString
- and it searches the searchString inside the string starting from the start/left
  -and returns the index value of the searchString from first occurrence if found, if not returns -1
- if nothing is passed as a parameter, the parameter will be undefined

#### Examples

```JS
const string = 'The code undefined code code'
console.log(string.indexOf('code')) // 4
console.log(string.indexOf('Code')) // -1
console.log(string.indexOf('')) // 0
console.log(string.indexOf()) // 9 // since undefined automatically passed and 'undefined' is in the string and matched it.
```

### 3. lastIndexOf

- String.lastIndexOf(searchString) takes a parameter searchString
- and it searches the searchString inside the string starting from the right/end
- and returns the index value of the searchString from last occurrence if found, if not returns -1
- if nothing passed as a parameter, the parameter will be undefined

#### Examples

```js
const string = "The code undefined code code";
console.log(string.lastIndexOf("code")); // 24
console.log(string.lastIndexOf("Code")); // -1
console.log(string.lastIndexOf("")); // 28
console.log(string.lastIndexOf()); // 9 // since undefined automatically passed and 'undefined' is in the string and matched it.
```

### 4. slice

- String.slice() method extracts a section of a string and returns as a new string so they don't change the original string
- syntax
- String.slice(indexStart, indexEnd)
- indexStart is the position from where we want to start taking a slice from the original string
- if negative index is given, slice() will go from the end of the string, end character will index will be -1, second last character index will be -2 and so on
- indexEnd is the position where we want slice() to stop slicing the string
- the indexEnd'th will be excluded
- if indexStart is getter than indexEnd, then slice() will return ''(empty string)

#### Examples

```js
const string = "The morning is upon us.";
console.log(string.slice(12)); // is upon us.
console.log(string.slice(-11)); // is upon us.
console.log(string.slice(13, 16)); // s u
console.log(string.slice(16, 13)); // ''
console.log(string.slice(-8, -4)); // 'upon'
console.log(string.slice(-8, 4)); // ''
console.log(string.slice(8, -4)); // 'ing is upon'
```

### 5. substring

- String.substring() method extracts a section of a string and returns as a new string so they don't change the original string
- syntax
- String.substring(indexStart, indexEnd)
- indexStart is the position from where we want to start taking a slice from the original string
- if negative index is given, substring() assumes any negative index as 0, so extract from the start
- indexEnd is the position where we want substring() to stop slicing the string
- the indexEnd'th will be excluded
- if indexStart is getter than indexEnd, then substring() will swap there positions

#### Examples

```js
const string = "The morning is upon us.";
console.log(string.substring(12)); // is upon us.
console.log(string.substring(-11)); // is upon us.
console.log(string.substring(13, 16)); // s u
console.log(string.substring(16, 13)); // s u
console.log(string.substring(-8, -4)); // 'upon'
console.log(string.substring(-8, 4)); // 'The'
console.log(string.substring(8, -4)); // 'The morn'
```

### 6. split

- String.split(separator) is used whenever we want to divide
- our string into substring based on a separator we pass into the split() method
- and split() method will return those substring ordered inside an array and returns the array
- so it doesn't modify the original array

#### Examples

```js
const string = "The morning is upon us.";
console.log(string.split()); // [ 'The morning is upon us.' ]
console.log(string.split(" ")); // [ 'The', 'morning', 'is', 'upon', 'us.' ]
console.log(string.split(""));
/* 
[
  'T', 'h', 'e', ' ', 'm',
  'o', 'r', 'n', 'i', 'n',
  'g', ' ', 'i', 's', ' ',
  'u', 'p', 'o', 'n', ' ',
  'u', 's', '.'
]
*/
console.log(string.split("o")); // [ 'The m', 'rning is up', 'n us.' ]
```

### 7. includes

- String.includes(searchString) is used whenever we want to see or determine
- if our string is found within another string, if found returns true else false

#### Examples

```js
const string = "The brown fox jumps over the lazy dog undefined";
console.log(string.includes("fox")); // true
console.log(string.includes("Fox")); // false
console.log(string.includes()); // true
```

### 8. startsWith

- String.startsWith(searchString) is used whenever we ant to check if a string starts with another string or not

#### Examples

```js
const string = "Playing cricket is good for health";
console.log(string.startsWith("Playing")); // true
console.log(string.startsWith("cricket")); // false
```

### 9. endsWith

- String.endsWith(searchString) checks whether a string ends with another string or not

#### Examples

```js
const string = "The cat is beautiful!";
console.log(string.endsWith("beautiful!")); // true
console.log(string.endsWith("beautiful")); // false
```

### 10. concat

- String.concat(str1, str2, strN) is used to concatenate strings
- it returns a new string and doesn't modify original strings

#### Examples

```js
const str1 = "Hello";
const str2 = "World!";
const concatenatedStr = str1.concat(" ", str2); // Hello World!
console.log(concatenatedStr);

/* Performance notes
it is strongly recommended to use assignment operators (+, +=) instead of the concat() method
*/
```

### 11. repeat

- String.repeat(count) is used whenever we want to do more copies of a string
- it takes a count parameter which defines the number copies of the string should be done
- returns new string by not modifying original string
- if 0 or no parameter is passed repeat() will return empty string
- if decimal number is passed, repeat() will convert this into an integer
- -1 as counter will return RangeError

#### Examples

```js
const string = "hello";
const fiveCopies = string.repeat(5); // hellohellohellohellohello
console.log(fiveCopies);

console.log(string.repeat()); // ''
console.log(string.repeat(1)); // hello
console.log(string.repeat(2.5)); // helohelo
console.log(string.repeat(-1)); // RangeError
console.log(string.repeat(1 / 0)); // RangeError
```

### 12. trim

- String.trim() is used to remove white space from both start and end of the string
- or removes the leading and trailing white space and line terminator characters from a string.
- it returns new string and does not modify origin string

#### Examples

```js
const string = " Hello World ";
const trimmedStr = string.trim();

console.log(trimmedStr); // 'Hello World'
```

### 13. trimStart

- String.trimStart() is used to remove white space from the start of a string
- or removes the leading white space and line terminator characters from a string.
- it returns new string and does not modify origin string

#### Examples

```js
const string = " Hello World ";
const trimmedStr = string.trimStart();

console.log(trimmedStr); // 'Hello World '
```

### 14. trimEnd

- String.trimEnd() is used to remove white space from the end of a string
- or removes the trailing white space and line terminator characters from a string.
- it returns new string and does not modify origin string

#### Examples

```js
const string = " Hello World ";
const trimmedStr = string.trimEnd();

console.log(trimmedStr); // ' Hello World'
```

### 15. padStart

- String.padStart(targetLength, padString) is used whenever we want to pad our original string
- from the start with another string to reach a given or target length
- if targetLength is given but padString is not given, then padString will be by default space
- it returns new string not modifying original string

#### Examples

```js
const string = "abc";
console.log(string.padStart(10)); // '       abc'
console.log(string.padStart(10, "foo")); // 'foofoofabc'
console.log(string.padStart(10, "12345678")); // '1234567abc'
console.log(string.padStart(2)); // 'abc'
```

### 16. padEnd

- String.padEnd(targetLength, padString) is used whenever we want to pad our original string
- from the end with another string to reach a given or target length
- if targetLength is given but padString is not given, then padString will be by default space
- it returns new string not modifying original string

#### Examples

```js
const string = "abc";
console.log(string.padEnd(10)); // 'abc       '
console.log(string.padEnd(10, "foo")); // 'abcfoofoof'
console.log(string.padEnd(10, "12345678")); // 'abc1234567'
console.log(string.padEnd(2)); // 'abc'
```

### 17. localeCompare

- referenceString.localCompare(compareString) is used whenever we want to compare two strings
- localCompare() returns a numeric value
- if the referenceString occurs before compareString it will return a negative value (-1/-2/-3)
- if the referenceString occurs after compareString it will return a positive value (+1/+2)
- if the referenceString is equivalent to compareString it will return 0

#### Examples

```js
const a = "a";
const b = "b";

console.log(a.localeCompare(b)); // -1
console.log(b.localeCompare(a)); // 1
console.log(a.localeCompare(a)); // 0
```

### 18. search

- String.search(regex) is used to search for a match
- between regular expression and the string object
- search() will always returns an index that is the index of the first match
- search() is case sensitive
- when search fails it returns -1

#### Examples

```js
const string = "The rain in SPAIN stays mainly in the plain";

console.log(string.search("ain")); // 5 // search() will convert 'ain' into regular expression
console.log(string.search(/ain/)); // 5
console.log(string.search(/AIN/)); // 14
console.log(string.search(/AIN/i)); // 5
console.log(string.search(/w/)); // -1
```

### 19. match

- String.match(regex) is used for match
- between regular expression and the string object
- match() will return an array with some information about the match inside
- and it will only return the first match
- when match() fails it returns null

#### Examples

```js
const string = "The rain in SPAIN stays mainly in the plain";

console.log(string.match("ain")); // match() will convert 'ain' into regular expression
/* 
[
  'ain',
  index: 5,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
]
*/
console.log(string.match(/ain/));
console.log(string.match(/AIN/g)); // [ 'AIN' ]
console.log(string.match(/AIN/gi)); // [ 'ain', 'AIN', 'ain', 'ain' ]
console.log(string.match(/w/)); // null
```

### 20. matchAll

- String.matchAll(regex) is used for match
- between regular expression and the string object
- matchAll() will return an array with some information about the match inside
- and it will return an iterable of matches containing the results of that search.
- when matchAll() fails it returns empty array []

#### Examples

```js
const string = "The rain in SPAIN stays mainly in the plain";

console.log([...string.matchAll("ain")]);

// matchAll() will convert this into regular expression like this by adding global modifier
// string.matchAll(/ain/g)
/* 
[
  [
    'ain',
    index: 5,
    input: 'The rain in SPAIN stays mainly in the plain',
    groups: undefined
  ],
  [
    'ain',
    index: 25,
    input: 'The rain in SPAIN stays mainly in the plain',
    groups: undefined
  ],
  [
    'ain',
    index: 40,
    input: 'The rain in SPAIN stays mainly in the plain',
    groups: undefined
  ]
]
*/

console.log([...string.matchAll(/w/gi)]); // []
```

### 21. replace

- String.replace(searchString, replaceString) is used whenever we want to
- replace a substring inside our string with another string
- searchString can be string or regular expression
- it returns a new string not modifying original string
- replace only replace the first occurrence of the match
- the second parameter can be a function and the function takes a parameter which is the match
- String.replace(searchString, replaceFunction)

#### Examples

```js
const string = "Mr Blue has a blue house and a blue car";
console.log(string.replace("blue", "red")); // Mr Blue has a red house and a blue car

const result = string.replace("blue", (match) => {
  return match.toUpperCase();
});
console.log(result); // Mr Blue has a BLUE house and a blue car

console.log(string.replace(/blue/g, "red")); // Mr Blue has a red house and a red car
console.log(string.replace(/blue/gi, "red")); // Mr red has a red house and a red car
```

### 22. replaceAll

- String.replaceAll(searchString, replaceString) will replace all the match of the string
- searchString can be string or regular expression
- it returns a new string not modifying original string
- the second parameter can be a function and the function takes a parameter which is the match
- String.replaceAll(searchString, replaceFunction)

#### Examples

```js
const string = "Mr Blue has a blue house and a blue car";
console.log(string.replaceAll("blue", "red")); // Mr Blue has a red house and a red car

const result = string.replaceAll("blue", (match) => {
  return match.toUpperCase();
});
console.log(result); // Mr Blue has a BLUE house and a BLUE car

console.log(string.replaceAll(/blue/g, "red")); // Mr Blue has a red house and a red car
console.log(string.replaceAll(/blue/gi, "red")); // Mr red has a red house and a red car
```

### 23. charCodeAt

- String.codePointAt(index) is UTF-16 based and range is from 0 to 65535
- Returns the Unicode value of the character at the specified location.
- when parameter index is not passed by default it would be 0 index
- if there is no element at the position(index) it'll return NaN

#### Examples

```js
const str = "Ok 👍";
console.log(str.length); // 5
console.log(str.codePointAt(0)); // 79
console.log(str.codePointAt(1)); // 107
console.log(str.codePointAt(2)); // 32
console.log(str.codePointAt(3)); // 55357
console.log(str.codePointAt(4)); // 56397
console.log(str.codePointAt(5)); // NaN
console.log(str.codePointAt()); // 99
```

### 24. codePointAt

- String.codePointAt(index) is Unicode based and range is from 0 to 65535 & > 65355
- Returns the Unicode value of the character at the specified location.
- when parameter index is not passed by default it would be 0 index
- if there is no element at the position(index) it'll return undefined

#### Examples

```js
const str = "Ok 👍";
console.log(str.length); // 5
console.log(str.code(0)); // 79
console.log(str.codePointAt(1)); // 107
console.log(str.codePointAt(2)); // 32
console.log(str.codePointAt(3)); // 128077
console.log(str.codePointAt(4)); // 56397
console.log(str.codePointAt(5)); // NaN
console.log(str.codePointAt()); // 99
```

### 25. fromCharCode

- String.fromCharCode(num) is used whenever we want to get
- actual value from a unicode

#### Examples

```js
console.log(String.fromCharCode(79)); // 'O'
console.log(String.fromCharCode(107)); // 'k'
console.log(String.fromCharCode(32)); // '  '
console.log(String.fromCharCode(55357)); // �
console.log(String.fromCharCode(56397)); // 'k'

console.log(String.fromCharCode(79, 107, 32, 55357, 56397)); // 'Ok 👍
```

### 26. fromCodePoint

- String.fromCodePoint(num) is used whenever we want to get
- actual value from a unicode

#### Examples

```js
console.log(String.fromCodePoint(79)); // 'O'
console.log(String.fromCodePoint(107)); // 'k'
console.log(String.fromCodePoint(32)); // ' '
console.log(String.fromCodePoint(128077)); // 👍
console.log(String.fromCodePoint(56397)); // �

console.log(String.fromCodePoint(79, 107, 32, 55357, 56397)); // 'Ok 👍'
console.log(String.fromCodePoint(79, 107, 32, 128077)); // 'Ok 👍
```

### 27. normalize

- String.normalize(form) // form => NFC/NFD default NFC
- Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms

#### Examples

```js
// before normalization
let str1 = "\u00c7"; // Ç
console.log(str1.length); // 1

let str2 = "\u0043\u0327"; // ̧C = C + ̧
console.log(str2.length); // 2

// after normalization
str1 = str1.normalize();
console.log(str1.length); // 1
console.log(str1.codePointAt(0)); // 199

str2 = str2.normalize();
console.log(str2.length); // 1
console.log(str2.codePointAt(0)); // 199

str1 = str1.normalize("NFD");
console.log(str1.length);
console.log(str1.codePointAt(0)); // 67
console.log(str1.codePointAt(1)); // 807
```

### 28. toLowerCase

- String.toLowerCase() is used whenever we want to all
- the alphabetic character to be lower case or small letter
- toLowerCase() returns a new string without changing the original string

#### Examples

```js
const string = "My name is Jisan";
console.log(string.toLowerCase()); // my name is jisan
```

### 29. toUpperCase

- String.toUpperCase() is used whenever we want to all
- the alphabetic character to be upper case or capital letter
- toUpperCase() returns a new string without changing the original string

#### Examples

```js
const string = "my name is jisan";
console.log(string.toUpperCase()); // MY NAME IS JISAN
```

### 30. toLocaleLowerCase

- String.toLocaleLowerCase(local)
- Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
- toLocaleLowerCase() returns a new string without changing the original string

#### Examples

```js
const string = "ISTANBUL";
console.log(string.toLocaleUpperCase("en-US")); // istanbul

console.log(string.toLocaleLowerCase("tr")); // ıstanbul
```

### 31. toLocaleUpperCase

- String.toLocaleUpperCase(local)
- Converts all alphabetic characters to uppercase, taking into account the host environment's current locale.
- toLocaleUpperCase() returns a new string without changing the original string

#### Examples

```js
const string = "istanbul";
console.log(string.toLocaleUpperCase("en-US")); // ISTANBUL

console.log(string.toLocaleUpperCase("tr")); // İSTANBUL
```

### 32. toString

- String.prototype.toString()
- Returns a string representation of a string.
- no need to use toString() method explicitly

#### Examples

```js
const string = "Hello World!";
console.log(string.toString()); // 'Hello World!'
```

### 33. valueOf

- String.prototype.valueOf()
- Returns the primitive value of the specified object.
- no need to use valueOf() method explicitly

#### Examples

```js
const string = "Hello World!";
console.log(string.valueOf()); // 'Hello World!'
```

### 34. raw

- String.raw`templateString`

#### Examples

```js
const string = `C\windows\registration\name\filename.js`;
console.log(string);
/* 
egistration
ame
ilename.js
*/

const escapedFlag = String.raw`C\windows\registration\name\filename.js`;
console.log(escapedFlag); // C\windows\registration\name\filename.js
```
