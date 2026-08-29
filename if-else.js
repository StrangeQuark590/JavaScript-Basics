
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
} 


//NOTE : Logical Operators in JS are : 

// || (OR), && (AND), ! (NOT)

//NOTE : The switch statements are also there in JS and their syntax is similar to C++.

//Ternary Operator


let boolval = false;

const var1 = boolval ? "hey" : "bye";

console.log(var1);

//we can also pass different functions on basis of boolval variable as input using the ternary operator.


const select1 = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select1.addEventListener("change", () =>           //syntax to pass function based on ternary operator
  select1.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);

const select3 = document.querySelector("select");
const html2 = document.querySelector("html");

select.addEventListener("change", () => {            //can also use switch statements through this syntax
  const choice = select.value;  

  switch (choice) {
    case "black":
      update("black", "white");
      break;
    case "white":
      update("white", "black");
      break;
    case "purple":
      update("purple", "white");
      break;
    case "yellow":
      update("yellow", "purple");
      break;
    case "psychedelic":
      update("lime", "purple");
      break;
  }
});

function update(bgColor, textColor) {
  html2.style.backgroundColor = bgColor;
  html2.style.color = textColor;
}

//NOTE : Grouping of switch statements

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

//Switch statements perform strict equality (===)