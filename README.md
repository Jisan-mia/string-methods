### 1. charAt

- The `String.charAt(index)` method takes a parameter `index` (the position in the string) and returns the character at that index in the string.

#### Examples

```js
const string = "Hello World!";
console.log(string.charAt(4)); // 'o'
```

### 2. indexOf

- The `String.indexOf(searchString)` method takes a parameter `searchString` and searches for it within the string, starting from the beginning (left side).
- It returns the index of the first occurrence of `searchString` if found; if not found, it returns -1.
- If no parameter is provided, it defaults to `undefined`.

#### Examples

```js
const string = 'The code undefined code code';
console.log(string.indexOf('code')); // 4
console.log(string.indexOf('Code')); // -1
console.log(string.indexOf('')); // 0
console.log(string.indexOf()); // 9 (since undefined was passed automatically, and 'undefined' is present in the string)
```

### 3. lastIndexOf

- The `String.lastIndexOf(searchString)` method takes a parameter `searchString` and searches for it within the string starting from the end (right side).
- It returns the index of the last occurrence of `searchString` if found; if not found, it returns -1.
- If no parameter is provided, it defaults to `undefined`.

#### Examples

```js
const string = "The code undefined code code";
console.log(string.lastIndexOf("code")); // 24
console.log(string.lastIndexOf("Code")); // -1
console.log(string.lastIndexOf("")); // 28
console.log(string.lastIndexOf()); // 9 (since undefined was passed automatically, and 'undefined' is present in the string)
```

### 4. slice

- The `String.slice()` method extracts a section of a string and returns it as a new string, leaving the original string unchanged.
- **Syntax:** `String.slice(indexStart, indexEnd)`
  - `indexStart` is the position from where the slice starts.
  - If a negative index is given, `slice()` starts counting from the end of the string (e.g., -1 is the last character).
  - `indexEnd` is the position where the slicing stops (this position is excluded).
  - If `indexStart` is greater than `indexEnd`, `slice()` returns an empty string.

#### Examples

```js
const string = "The morning is upon us.";
console.log(string.slice(12)); // 'is upon us.'
console.log(string.slice(-11)); // 'is upon us.'
console.log(string.slice(13, 16)); // 's u'
console.log(string.slice(16, 13)); // ''
console.log(string.slice(-8, -4)); // 'upon'
console.log(string.slice(-8, 4)); // ''
console.log(string.slice(8, -4)); // 'ing is upon'
```

### 5. substring

- The `String.substring()` method extracts a section of a string and returns it as a new string, leaving the original string unchanged.
- **Syntax:** `String.substring(indexStart, indexEnd)`
  - `indexStart` is the position from where to start extracting.
  - If a negative index is provided, `substring()` treats it as 0, starting from the beginning of the string.
  - `indexEnd` is where the extraction stops (this position is excluded).
  - If `indexStart` is greater than `indexEnd`, `substring()` swaps their positions.

#### Examples

```js
const string = "The morning is upon us.";
console.log(string.substring(12)); // 'is upon us.'
console.log(string.substring(-11)); // 'is upon us.'
console.log(string.substring(13, 16)); // 's u'
console.log(string.substring(16, 13)); // 's u'
console.log(string.substring(-8, -4)); // 'upon'
console.log(string.substring(-8, 4)); // 'The'
console.log(string.substring(8, -4)); // 'The morn'
```

### 6. split

- The `String.split(separator)` method is used to divide a string into substrings based on a specified separator.
- It returns the substrings in an array, without modifying the original string.

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

- The `String.includes(searchString)` method checks if a string contains a specified substring and returns `true` if it does, or `false` if it does not.

#### Examples

```js
const string = "The brown fox jumps over the lazy dog undefined";
console.log(string.includes("fox")); // true
console.log(string.includes("Fox")); // false
console.log(string.includes()); // true
```

### 8. startsWith

- The `String.startsWith(searchString)` method checks if a string begins with a specified substring.

#### Examples

```js
const string = "Playing cricket is good for health";
console.log(string.startsWith("Playing")); // true
console.log(string.startsWith("cricket")); // false
```
 
### 9. endsWith

- `String.endsWith(searchString)` checks whether a string ends with a specified substring.

#### Examples

```js
const string = "The cat is beautiful!";
console.log(string.endsWith("beautiful!")); // true
console.log(string.endsWith("beautiful")); // false
```

### 10. concat

- `String.concat(str1, str2, strN)` is used to concatenate multiple strings.
- It returns a new string without modifying the original strings.

#### Examples

```js
const str1 = "Hello";
const str2 = "World!";
const concatenatedStr = str1.concat(" ", str2); // Hello World!
console.log(concatenatedStr);

/* Performance note: 
It is strongly recommended to use the assignment operators (+, +=) instead of the concat() method.
*/
```

### 11. repeat

- `String.repeat(count)` is used to create multiple copies of a string.
- It takes a `count` parameter that defines how many copies of the string should be made.
- It returns a new string without modifying the original string.
- If `0` or no parameter is passed, `repeat()` will return an empty string.
- If a decimal number is passed, `repeat()` will convert it into an integer.
- Passing `-1` as the counter will result in a `RangeError`.

#### Examples

```js
const string = "hello";
const fiveCopies = string.repeat(5); // hellohellohellohellohello
console.log(fiveCopies);

console.log(string.repeat()); // ''
console.log(string.repeat(1)); // hello
console.log(string.repeat(2.5)); // hellohello
console.log(string.repeat(-1)); // RangeError
console.log(string.repeat(1 / 0)); // RangeError
```

### 12. trim

- `String.trim()` is used to remove whitespace from both the start and end of a string.
- It removes leading and trailing whitespace and line terminator characters.
- It returns a new string without modifying the original string.

#### Examples

```js
const string = " Hello World ";
const trimmedStr = string.trim();

console.log(trimmedStr); // 'Hello World'
```

### 13. trimStart

- `String.trimStart()` is used to remove whitespace from the beginning of a string.
- It removes leading whitespace and line terminator characters.
- It returns a new string without modifying the original string.

#### Examples

```js
const string = " Hello World ";
const trimmedStr = string.trimStart();

console.log(trimmedStr); // 'Hello World '
```

### 14. trimEnd

- `String.trimEnd()` is used to remove whitespace from the end of a string.
- It removes trailing whitespace and line terminator characters.
- It returns a new string without modifying the original string.

#### Examples

```js
const string = " Hello World ";
const trimmedStr = string.trimEnd();

console.log(trimmedStr); // ' Hello World'
```

### 15. padStart

- `String.padStart(targetLength, padString)` is used to pad the original string from the start with another string to reach a specified target length.
- If `targetLength` is provided but `padString` is not, it defaults to a space.
- It returns a new string without modifying the original string.

#### Examples

```js
const string = "abc";
console.log(string.padStart(10)); // '       abc'
console.log(string.padStart(10, "foo")); // 'foofoofabc'
console.log(string.padStart(10, "12345678")); // '12345678abc'
console.log(string.padStart(2)); // 'abc'
```

### 16. padEnd

- `String.padEnd(targetLength, padString)` is used to pad the original string from the end with another string to reach a specified target length.
- If `targetLength` is provided but `padString` is not, it defaults to a space.
- It returns a new string without modifying the original string.

#### Examples

```js
const string = "abc";
console.log(string.padEnd(10)); // 'abc       '
console.log(string.padEnd(10, "foo")); // 'abcfoofoof'
console.log(string.padEnd(10, "12345678")); // 'abc12345678'
console.log(string.padEnd(2)); // 'abc'
```

### 17. localeCompare

- `referenceString.localeCompare(compareString)` is used to compare two strings.
- `localeCompare()` returns a numeric value:
  - If `referenceString` comes before `compareString`, it returns a negative value (-1, -2, -3).
  - If `referenceString` comes after `compareString`, it returns a positive value (+1, +2).
  - If both strings are equivalent, it returns `0`.

#### Examples

```js
const a = "a";
const b = "b";

console.log(a.localeCompare(b)); // -1
console.log(b.localeCompare(a)); // 1
console.log(a.localeCompare(a)); // 0
```

### 18. search

- `String.search(regex)` is used to search for a match between a regular expression and the string object.
- `search()` always returns the index of the first match and is case sensitive.
- If no match is found, it returns `-1`.

#### Examples

```js
const string = "The rain in SPAIN stays mainly in the plain";

console.log(string.search("ain")); // 5 (search converts 'ain' into a regular expression)
console.log(string.search(/ain/)); // 5
console.log(string.search(/AIN/)); // 14
console.log(string.search(/AIN/i)); // 5
console.log(string.search(/w/)); // -1
```

### 19. match

- The `String.match(regex)` method is used to find a match between a regular expression and a string object.
- The `match()` method returns an array containing information about the match.
- It will only return the first match it finds.
- If `match()` fails, it returns `null`.

#### Examples

```js
const string = "The rain in SPAIN stays mainly in the plain";

console.log(string.match("ain")); // The match() method converts 'ain' into a regular expression
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

- The `String.matchAll(regex)` method is used to find all matches between a regular expression and a string object.
- The `matchAll()` method returns an iterable containing all matches along with their details.
- If `matchAll()` fails, it returns an empty array `[]`.

#### Examples

```js
const string = "The rain in SPAIN stays mainly in the plain";

console.log([...string.matchAll("ain")]);

// matchAll() converts this to a regular expression by adding a global modifier
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

- The `String.replace(searchString, replaceString)` method is used to replace a substring within a string with another string.
- `searchString` can be either a string or a regular expression.
- The method returns a new string and does not modify the original string.
- By default, `replace()` will only change the first occurrence of the match.
- The second parameter can also be a function that takes the match as an argument.
- Usage: `String.replace(searchString, replaceFunction)`

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

- The `String.replaceAll(searchString, replaceString)` method replaces all occurrences of a substring in a string.
- `searchString` can be either a string or a regular expression.
- It returns a new string and does not modify the original string.
- The second parameter can also be a function that takes the match as an argument.
- Usage: `String.replaceAll(searchString, replaceFunction)`

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

- The `String.charCodeAt(index)` method is based on UTF-16 and accepts an index ranging from 0 to the length of the string minus one.
- It returns the Unicode value of the character at the specified index.
- If the `index` parameter is not provided, it defaults to 0.
- If there is no character at the specified position, it will return `NaN`.

#### Examples

```js
const str = "Ok 👍";
console.log(str.length); // 5
console.log(str.charCodeAt(0)); // 79
console.log(str.charCodeAt(1)); // 107
console.log(str.charCodeAt(2)); // 32
console.log(str.charCodeAt(3)); // 55357
console.log(str.charCodeAt(4)); // 56397
console.log(str.charCodeAt(5)); // NaN
console.log(str.charCodeAt()); // 79
```

### 24. codePointAt

- The `String.codePointAt(index)` method is based on Unicode and accepts an index ranging from 0 to the length of the string minus one.
- It returns the Unicode value of the character at the specified index.
- If the `index` parameter is not provided, it defaults to 0.
- If there is no character at the specified position, it will return `undefined`.

#### Examples

```js
const str = "Ok 👍";
console.log(str.length); // 5
console.log(str.codePointAt(0)); // 79
console.log(str.codePointAt(1)); // 107
console.log(str.codePointAt(2)); // 32
console.log(str.codePointAt(3)); // 128077
console.log(str.codePointAt(4)); // 56397
console.log(str.codePointAt(5)); // NaN
console.log(str.codePointAt()); // 79
```
### 25. fromCharCode

- `String.fromCharCode(num)` is used to obtain the actual value from a Unicode code point.

#### Examples

```js
console.log(String.fromCharCode(79)); // 'O'
console.log(String.fromCharCode(107)); // 'k'
console.log(String.fromCharCode(32)); // ' ' (space)
console.log(String.fromCharCode(55357)); // � (unknown character)
console.log(String.fromCharCode(56397)); // 'k'

console.log(String.fromCharCode(79, 107, 32, 55357, 56397)); // 'Ok �k'
```

### 26. fromCodePoint

- `String.fromCodePoint(num)` is used to obtain the actual value from a Unicode code point.

#### Examples

```js
console.log(String.fromCodePoint(79)); // 'O'
console.log(String.fromCodePoint(107)); // 'k'
console.log(String.fromCodePoint(32)); // ' ' (space)
console.log(String.fromCodePoint(128077)); // 👍 (example emoji)
console.log(String.fromCodePoint(56397)); // � (unknown character)

console.log(String.fromCodePoint(79, 107, 32, 55357, 56397)); // 'Ok �'
console.log(String.fromCodePoint(79, 107, 32, 128077)); // 'Ok 👍'
```

### 27. normalize

- `String.normalize(form)` normalizes the string to the specified Unicode normalization form, where the default is NFC (Normalization Form C).

#### Examples

```js
// Before normalization
let str1 = "\u00c7"; // Ç
console.log(str1.length); // 1

let str2 = "\u0043\u0327"; // C +  ̧
console.log(str2.length); // 2

// After normalization
str1 = str1.normalize();
console.log(str1.length); // 1
console.log(str1.codePointAt(0)); // 199

str2 = str2.normalize();
console.log(str2.length); // 1
console.log(str2.codePointAt(0)); // 199

str1 = str1.normalize("NFD");
console.log(str1.length); // 2
console.log(str1.codePointAt(0)); // 67
console.log(str1.codePointAt(1)); // 807
```

### 28. toLowerCase

- `String.toLowerCase()` is used to convert all alphabetic characters in a string to lowercase. 
- This method returns a new string without modifying the original string.

#### Examples

```js
const string = "My name is Jisan";
console.log(string.toLowerCase()); // 'my name is jisan'
```

### 29. toUpperCase

- `String.toUpperCase()` is used to convert all alphabetic characters in a string to uppercase.
- Similar to `toLowerCase()`, this method returns a new string without changing the original string.

#### Examples

```js
const string = "my name is jisan";
console.log(string.toUpperCase()); // 'MY NAME IS JISAN'
```

### 30. toLocaleLowerCase

- `String.toLocaleLowerCase(local)` converts all alphabetic characters to lowercase based on the current locale environment.
- Like other methods, it returns a new string without altering the original string.

#### Examples

```js
const string = "ISTANBUL";
console.log(string.toLocaleLowerCase("en-US")); // 'istanbul'
console.log(string.toLocaleLowerCase("tr")); // 'ıstanbul'
```

### 31. toLocaleUpperCase

- `String.toLocaleUpperCase(local)` converts all alphabetic characters to uppercase, taking into account the current locale environment.
- This method also returns a new string without modifying the original.

#### Examples

```js
const string = "istanbul";
console.log(string.toLocaleUpperCase("en-US")); // 'ISTANBUL'
console.log(string.toLocaleUpperCase("tr")); // 'İSTANBUL'
```

### 32. toString

- `String.prototype.toString()` returns a string representation of a string.
- There is no need to call the `toString()` method explicitly, as string values are automatically converted.

#### Examples

```js
const string = "Hello World!";
console.log(string.toString()); // 'Hello World!'
```

### 33. valueOf

- `String.prototype.valueOf()` returns the primitive value of a specified string object.
- Like `toString()`, it does not need to be called explicitly.

#### Examples

```js
const string = "Hello World!";
console.log(string.valueOf()); // 'Hello World!'
```

### 34. raw

- `String.raw` is used with template strings.

#### Examples

```js
const string = `C\windows\registration\name\filename.js`;
console.log(string);
/* 
This may output:
egistration
ame
ilename.js
*/

const escapedString = String.raw`C\windows\registration\name\filename.js`;
console.log(escapedString); // Outputs: C\windows\registration\name\filename.js
``` 

---
Originally written at [https://github.com/Jisan-mia/string-methods](https://github.com/Jisan-mia/string-methods)
