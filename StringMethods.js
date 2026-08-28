//Exhaustive list of all string methods : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


let text = "vvkbvvcfxfcfxrcv";
console.log(text.length);

let text2 = "hello world";
console.log(text2.charAt(0));

console.log(text2.charCodeAt(0));  //return UTF-16 code of character at 0 index

console.log(text2.codePointAt(0));

console.log(text2.at(-1));  //same as charAt but allows use of negative indices.

//Property Access

//accessing string characters like an array is read only in JS and if the index doesn't exist then it returns undefined

let s1 = "hello";
let s2 = "world";

console.log(s1.concat(" ", s2));

//NOTE : String are immutable in JS

//slicing strings in JS

console.log(text2.slice(4)); //returns substring starting from index 4 till the end.

console.log(text2.slice(-4, -1));   //accepts negative indexing as well

//substring() method can also be used. Only difference is that it treats any index less than 0 as 0

//the use of substr() method has now been deprecated.

console.log(text2.toUpperCase());
console.log(text2.toLowerCase());

//A string is well formed if it doesn't contain lone surrogates (A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.)

//isWellFormed() returns true if string is well formed
//toWellFormed() makes a string well formed

console.log(text2.trim());    //removes trailing whitespaces from both ends

text2.trimStart();    //removes trailing whitespaces from the start

text2.trimEnd();

//padding string methods : involves padding a string with another string until the original string reaches a certain length
// padding is done either at the beginning or at the end 

console.log(text2.padStart(15, 'x'));
console.log(text2.padEnd(15, 'x'));

//replicating a string

console.log(text2.repeat(4));  //returns the replication of original string 4 times

//replace method
//replaces the first matched substring with the given substring

console.log(text2.replace("hello", "Bye"));

//In place of "hello" above (basically the matching substring), we can pass a regular expression as well for matching
//regular expressions here are passed without quotation marks.

console.log(text2.replace(/HELLO/i, "bye"));   //removed case sensitivity through regex

console.log(text2.replace(/hello/g, "bYe"));  //will replace all appearances of hello with bYe

//.replaceAll() can also be used but it doesn't work in internet explorer

//converting string to an array

let myArr = text2.split(" ");    //will split string on every space encountered and put all those parts in the array
//basically the above will be an array of words

//.spit("") splits every character and puts them in array (it is unsafe for emojis)

