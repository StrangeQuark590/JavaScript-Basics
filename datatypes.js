//There are mainly 8 datatypes in JS

//Number
//These include integers and floating points. Infinity, -Infinity and NaN are special number
//Infinity is larger than any other number and is given as a result of division by zero.
//NaN means a computational error (not an actual error which will stop the program).
//Arithmetic operations in JS are completely safe and will never result in an error.
//Any mathematical operation on NaN will further result in NaN.

//BigInt
//Number datatype covers the range of values from -(2^53 - 1) to (2^53 - 1).
//For values larger than that, we can use BigInt.

const bigint = 29834297398723n;
//the n at the end declares it as a BigInt
//Number can actually store integers as big as 10^308 but numbers larger than 2^53 -1 are stored as approximation and with precision error.

//String
//Can be initialised through double quotes or single quotes. There is no char datatype in JS.
//the `` (backticks) are used for making formattable strings. They can also be used for writing multiline strings.

//tip : To make a string which contains quotation marks as one of the characters, we can use the \ before the quotation marks or we can use the quotation mark other than the ones in which we enclosed our string
//NOTE : String() converts its argument to string datatype.

let quoteString = "He said, 'I think therefore I am'";
quoteString = "He said, \"I think therefore I am\"";
let a = 5;
let formattableString = `This is formattable look ${a + 1}`;
console.log(formattableString);

//Boolean

let b = true;
console.log(1 != 2 & !b);

//Null value 

let c = null;    //represents the absence of any value

//undefined value
//if a variable is declared but not assigned any value then it is by default assigned the undefined value

let d;
console.log(d);  //undefined

//Objects and symbols

// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, 
// objects are used to store collections of data and more complex entities.

// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness,
//  but also postpone the details till we know objects.

console.log(typeof Math);    //returns a string containing the type of operand, here it returns object 
console.log(typeof null);    //returns object which is a very well known wrong output in JS
console.log(typeof alert); 




