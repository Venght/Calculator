const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const decimals = document.querySelector('.decimal');

//get display elements
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');

let previous = "";
let current = "";
let operator = null;

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if(current.length >= 10) return;
        current += button.innerText;
        currentDisplay.innerText = current;
    })
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if(current === "") return;
        if(previous !== "") {
            calculate();
        }

        operator = button.textContent;
        previous = current;
        previousDisplay.textContent = previous + " " + operator;
        current = "";
        currentDisplay.textContent = current;
        
    })
})


    clear.addEventListener ('click', () => {
        previous = "";
        current = "";
        operator = null;
        previousDisplay.textContent = "";
        currentDisplay.textContent = "";
    })

decimals.addEventListener('click', () => {
    if(!current.includes('.')) {
        if(current === "") {
            current = "0.";
        } else {
            current += '.';
        }
        currentDisplay.textContent = current;
    }
})


equals.addEventListener('click', () => {
    if(previous === "" || current === "" || !operator) return;
    calculate();
    operator = null;
})

function calculate() {

    let result;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);

    if(isNaN(prev) || isNaN(curr)) return;

    switch(operator) {
        case '+':
        result = prev + curr;
        break;
        case '-':
        result = prev - curr;
        break;
        case '*':
        result = prev * curr;
        break;    
        case '/':
        if(curr === 0){
            return;
        } else {
            result = prev / curr;
            break;
        }
        default:
        return;
    }

    current = result.toString();
    currentDisplay.textContent = current;
    previousDisplay.textContent = "";
    previous = "";

}



