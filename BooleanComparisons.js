// The algorithm to compare two strings is :

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.


//for comparing values of different datatype, both values are converted into numeric values first
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

console.log(false == 0); // true
console.log(false === 0);    //false

//special cases
//null and undefined are equal to each other and to no other value when comparing with ==
//for all other comparisons, null is converted to 0 and undefined is converted to NaN

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

