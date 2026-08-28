// Both decimal and integer numbers come under the same datatype in JS i.e., number

const floatnum = 6.67864;
const intnum = 6;

console.log(floatnum);
console.log(intnum);

console.log(floatnum.toFixed(2)); //rounds the number upto 2 decimal places

let number = "74";  //a string

console.log(number + 3);           //considers 3 as a string too and concatenates them
console.log(Number(number) + 3);   //77

Number(number);  //converts string to number

//Mathematical operators in JS: 

// +, -, /, *, % and ** (exponent)

console.log(9 + 4);
console.log(9 * 4);
console.log(9 ** 4);
console.log(9 / 4);
console.log(9 % 4);

//post, pre increment and post, pre decrement are done the same way as c++.

// +=, *=, /=, etc are also all valid 

/* 
Comparison Operators in JS

 === (checks if both values and their datatypes are equal)
 !==
 == (only checks if their values are equal. Doesn't concern itself with datatypes being the same)
 != 
 < 
 <=
 > 
 >=
 */

//some important typecasting in JS

console.log('2' + 1 + 1);
console.log(1 + 2 + '3');
console.log(2 - '1');
console.log('6'/3);
console.log('6'/'3');

console.log(+ '23' + 5);  //the unary plus does the same thing as the Number(number) statement that is, it converts string to number
//unary operators have higher precedence than binary operators.

//the assignment operator in JS also returns some value as it is treated as an arithmetic operator

//a = b + 1;     this command assigns value b + 1 to a and then returns it

let x = 2;
let y = 1;

let c = 1 - (x = x - y);
console.log(c);

let p, q, r;

p = q = r = 2 + 2;  //valid assignment (called chained assignment)

a = p + q, q + r;      //comma operator has very low precedence. All the comma separated expressions are evaluated but only the value of the last expression is returned.

console.log("2" * 3);
console.log('2' * '3');

"" + 1 + 0;  //10
"" - 1 + 0;    //-1
true + false;    //1
6 / "3";        //2
"2" * "3";        //6
4 + 5 + "px";     //9px
"$" + 4 + 5;      //$45
"4" - 2;         //2
"4px" - 2;       //NaN
"  -9  " + 5;    //  -9  5
"  -9  " - 5;    //-14
null + 1;        //1
undefined + 1;    //NaN
" \t \n" - 2;     //-2



