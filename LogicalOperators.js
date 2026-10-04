//The OR (||) operator in js performs the classic or operation but also has a special property when it is performed on non-boolean vairables

// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.

//example...
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");   //returns SuperCoder

console.log( undefined || null || 0 );    //returns 0

false || console.log("Hey");     //statement gets executed due to work flow of or
true || console.log("Bye");      //not executed as true is encountered before the statement and or terminates

let a = false || false || true || false;    
let b = false || false;

console.log(a);
console.log(b);

//Conclusion : OR finds the first true value and returns it as it is

//AND (&&) Operator

//Works exaclty like the js OR operator but finds the first false value instead

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// In other words, AND returns the first falsy value or the last value if none were found.

console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5
console.log( 1 && 2 && null && 3 ); // null
console.log( 1 && 2 && 3 ); // 3, the last one

//NOT (!) Operator

//Work-Flow : converts the variable into a boolean if it isn't already.
// Returns the inverse value of the converted boolean

//So sometimes, not operator is also used to convert the variable into a boolean through double negation

//example : 

console.log(!!"hey");   //returns true
console.log(!"hey");    //false

//NOTE : The precedence for evaluation is : NOT, AND, OR (NAO)

