 //String Methods
//length
let name="vikas"
console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.slice(2,4))//till 3 from 2

console.log(name.slice(2))//till end from 2

console.log(name.replace("vik","shr"));

let friend="Singh"
console.log(name.concat("is a friend of",friend,"ok"))

let friend2="    Meena  "
console.log(friend2)
console.log(friend2.trim())

//strings are immutable*****************


const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of -4 the character returned is d"


//anchor
const myString = "Table of Contents";

document.body.innerHTML = myString.anchor("contents_anchor");

//big
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>

//blink
const worldString = "Hello, world";

console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>

//bold
const worldString = "Hello, world";

console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>

//charAt
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

//charCodeAt
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"

//codePointAt
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined



//concat Funtion
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"


//other string methods of Javascript
/*
String.prototype.endsWith()
String.prototype.fixed()
Deprecated
String.prototype.fontcolor()
Deprecated
String.prototype.fontsize()
Deprecated
String.fromCharCode()
String.fromCodePoint()
String.prototype.includes()
String.prototype.indexOf()
String.prototype.isWellFormed()
String.prototype.italics()
Deprecated
String.prototype.lastIndexOf()
String.prototype.link()
Deprecated
String.prototype.localeCompare()
String.prototype.match()
String.prototype.matchAll()
String.prototype.normalize()
String.prototype.padEnd()
String.prototype.padStart()
String.raw()
String.prototype.repeat()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()
String.prototype.slice()
String.prototype.small()
Deprecated
String.prototype.split()
String.prototype.startsWith()
String.prototype.strike()
Deprecated
String.prototype.sub()
Deprecated
String.prototype.substr()
Deprecated
String.prototype.substring()
String.prototype.sup()
Deprecated
String.prototype.toLocaleLowerCase()
String.prototype.toLocaleUpperCase()
String.prototype.toLowerCase()
String.prototype.toString()
String.prototype.toUpperCase()
String.prototype.toWellFormed()
String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()
String.prototype.valueOf()
*/