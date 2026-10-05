function sayHello(name){
    return "Hello " + name;
}

const message = sayHello("Robo");
console.log(message);

//Local and global variables concepts are followed as usual in JS.

//Passing parameters and default parameters in JS


//If a value for a parameter is absent in the function call then an error is not raised but JS simply assigns that parameter the 
//undefined value

function printInfo(name, DOB){
    return (`Name : ${name}, Date of Birth : ${DOB}`);
}

console.log(printInfo("Robo"));
console.log(printInfo());

//undefined is therefore the default value of parameters
///user defined default parameters can be declared in function definition just like in python and C++.

function tellInfo(name, DOB = "not known"){
    return (`Name : ${name}, Date of Birth : ${DOB}`);
}

//a function can also be passed as the value for a default parameter

function MissingInfo(name){
    if(name == "Robo"){
        return "09/08/1999";
    }
    return undefined;
}

function BetterInfo(name, DOB = MissingInfo(name)){
    return (`Name : ${name}, Date of Birth : ${DOB}`);
}

console.log(BetterInfo("ROBO"));
console.log(BetterInfo("Robert"));

//NOTE : tellInfo("ROBO", undefined) function call will use "not known" as the default value and not undefined.

//Some other ways of default parameters are : 

function showMessage(text) {

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  console.log(text);
}

function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
}

function showCount(count) {
  // if count is undefined or null, show "unknown"
  return (count ?? "unknown");
}

//Return value of functions which do not return anything is undefined

//Anonymous functions and ways to pass/write them

//These are usually used when a function requires another function as one of its parameters (these are like the lambda functions in python)

//example 1 : 

const originals = [1, 2, 3];

const doubled = originals.map(function (item) {            //map function requires a function in its parameter (performs that function on every array element)
  return item * 2;
})

//or 

const doubled2 = originals.map((item) => {
    return item * 2;
})

//if there is only one parameter in the anonymous function then the braces can be removed (item)
//if the anonymous function contains only one return statement and only one parameter then it can be written as : 

const doubled3 = originals.map(item => item * 2);

//NOTE : The anonymous functions defined with the help of => are called arrow functions.

//NOTE : 
/* If we attach two JS scripts to an html document and both of them have a variable named 'name' in them then it will result in an error
This is because both the variables share a global scope (provided they're not local variables of some function in their individual JS scripts
But if two functions of the same name are declared in the scripts then the function which is declared later (determined by which script is attached later in html code) will be used, 
without any error. The first function will get overloaded. */

//NOTE : Variables declared using var keyword inside if or loop blocks will not remain local but rather will be hoisted and become global variables
// but if the same is done inside a function using var, the variables will still remain local.

//Declaring functions through function expressions : 

let sayBye = function (name){
  return "Bye " + name;
};                                       //semi colon at the end as it is an expression 

console.log(sayBye("Robo"));

//In JS, Functions are treated as values for variables. 
//For example, in the above function declarations, sayBye is a variable assigned a value of the function defined, and same holds for other functions declared above such as ShowMessage(), printInfo(), etc.

let alias = sayBye;    //creates another variable name to call the function

console.log(alias("Robo"));

console.log(alias);   //Displays the function code

//callBack functions : functions which are passed to another function as its arguments so that the function can call the later

//for example : 

function say(decide, name, Hi, Bye){
  if(decide){
    return Hi(name);
  }
  return Bye(name);
}

let greeting = say(false, "Robo", sayHello, sayBye);
console.log(greeting);
//another way could've been to use anonymous functions : 

greeting = say(false, "Robo", function (name){return "Hi " + name}, function (name){return "Bye " + name});
console.log(greeting);

console.log("HEY");

//Functions which are declared using function expressions are visible only after the flow execution reaches them i.e., they are not hoisted like the usual function declarations.

//Also a function declared normally is visible only inside the block in which it is declared.

//A function which gets declared inside an if else block will not be visible outside of it whatsover.

//To make it visible to the outside block, we can declare a variable in the outside block and assign the function value to that variable using function expressions inside that if else block

//for example : 

let age = 19;

let welcome;

if (age < 18) {

  welcome = function() {
    return ("Hello!");
  };

} else {

  welcome = function() {
    return ("Greetings!");
  };

}

console.log(welcome());


//Syntax of arrow functions : 

///let func = (arg1, arg2, ... , argN) => expression;

//example : 

let sum = (a, b) => a + b;

console.log(sum(1,2));

//if no arguments are there : 

let hey = () =>"HEY";

//for multiline arrow functions, we enclose thee expression inside curly brackets 

let sum2 = (a, b) => {
  result = a + b;
  return result;
}

