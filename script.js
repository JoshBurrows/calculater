const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("buttons"));

let num1 = 0;
let num2 = 0;
let operator = "";
let total = 0;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "+":
        num1 = display.innerText;
        display.innerText = "";
        operator = "add";
        break;
      case "-":
        num1 = display.innerText;
        display.innerText = "";
        operator = "sub";
        break;
      case "*":
        num1 = display.innerText;
        display.innerText = "";
        operator = "mult";
        break;
      case "/":
        num1 = display.innerText;
        display.innerText = "";
        operator = "div";
        break;
      case "=":
        num2 = display.innerText;
        total = eval(operator)(+num1, +num2);
        if (isNaN(total)) {
          total = 0;
        }
        display.innerText = total;
        break;
      case "CA":
        num1 = 0;
        num2 = 0;
        display.innerText = "";
        break;
      case "C":
        display.innerText = "";
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
