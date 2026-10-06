//An error is a type of object built into JS language.
//It contains the name/type of the error and a message.

//Types of errors : 

//Reference error : Thrown when we refer to a variable which is not declared or initialised within the current scope.

//Syntax error : Thrown when the code has some syntax mistake.

//Type error : Can be thrown for the following reasons
//1. an operand or argument passed to a function is incompatible with the type expected by the operator or function.
//2. attempting to modify a value which cannot be changed
//3. attempting to use a value in an inappropriate way

//example string.push() used for a variable storing a string value will return type error as pushing into a string is not appropriate in JS

//NOTE : console.table() and console.trace() are useful methods in JS for debugging.

//warnings are usually displayed in yellow font colour and do not stop the flow of execution
//They just advise the programmer to address some issue which may result in possible errors or program crashes.

//Example of try and catch block in JS for reference error

try {
    let a = undefinedVariable;
} 
catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message); // "undefinedVariable is not defined"
    console.log(e.name); // "ReferenceError"
    console.log(e.stack); // Stack of the error
}

try {
    throw new ReferenceError("Hello");  //manually throw an error
} 
catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "ReferenceError"
    console.log(e.stack); // Stack of the error
}

// Runtime errors: These happen when the code has correct syntax, so it can start running, but something goes wrong while it is running. 
// For example, trying to call something that isn't actually a function will cause a runtime error. 
// The syntax is fine, but the operation itself cannot be performed

//Syntax errors occur before runtime errors.