// String.raw`templateString`


// examples
const string = `C\windows\registration\name\filename.js`
console.log(string)
/* 
egistration
ame
ilename.js
*/

const escapedFlag = String.raw`C\windows\registration\name\filename.js`;
console.log(escapedFlag) // C\windows\registration\name\filename.js