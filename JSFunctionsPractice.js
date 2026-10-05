function add7(a){
    return a + 7;
}

console.log(add7(10));

function multiply(a, b){
    return a * b;
}

console.log(multiply(3,2));

function capitalize(word){
    return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

function lastLetter(word){
    return word.at(-1);
}

console.log(lastLetter("abcd"));