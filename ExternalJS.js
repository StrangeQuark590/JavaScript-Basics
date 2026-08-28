function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");    //selects all buttons in html

for (const button of buttons) {
  button.addEventListener("click", createParagraph);  //loops through all buttons and assigns an eventListerner to them
}


