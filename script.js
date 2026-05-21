function add(arg1, arg2){
    return arg1 + arg2;
}

function subtract(arg1, arg2){
    return arg1 - arg2;
}

function multiply(arg1, arg2){
    return arg1 * arg2;
}

function divide(arg1, arg2){
    return arg1 / arg2;
}

function operate(op, arg1, arg2){
    switch (op){
        case '+':
            add(arg1, arg2);
            break;
        case '-':
            subtract(arg1, arg2);
            break;
        case '*':
            multiply(arg1, arg2);
            break;
        case '/':
            divide(arg1, arg2);
            break;
    }
}

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const allButtons = document.querySelector(".allButtons");
const clear = document.querySelector("#clear");

let currentExpression = "";

display.textContent = currentExpression;

allButtons.addEventListener("click", (e) => {
    if(e.target.tagName === 'BUTTON'){
        console.log("button was clicked.")
    }
})