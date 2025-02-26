const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");
//const [num1, num2] = getNumber();

let firstNumber = "";
let operator = "";
let secondNumber = "";
const displayElement = document.querySelector("#display");

buttons.forEach(button => {
    button.addEventListener('click', function() {
        display.value += this.getAttribute("data-value");
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        display.value += this.getAttribute("data-value")
    })
})

function appendNumber(value) {
    return display.value += value;
}


function operate(operator, a, b) {

    if(operator == "+") {
        return a + b;
    }
    else if(operator == "-"){
        return a - b;
    }
    else if(operator == "*"){
        return a * b;
    }
    else if(operator == "/") {
        return a / b;
    }
    else {
        return null;
    }
}

function add(a, b) {
 return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}


function divide(a,b) {
    return a / b;
}

/*function getNumber() {
    let num1 = parseInt(prompt("Enter the first number?"));
    let num2 = parseInt(prompt("Enter the second number?"));
    return [num1, num2];
}*/



console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));