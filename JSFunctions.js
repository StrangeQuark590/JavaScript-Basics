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
  alert(count ?? "unknown");
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
} )

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