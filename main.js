// Functions for the basic math operators
// add
function add(x,y) {
    return x + y;
};

//subtract
function subtract(x,y) {
    return x-y;
};

//multiply
function multiply (x,y) {
    return x*y;
};

//divide
function divide(x,y) {
    return x / y;
}

//operate function that takes an operator and 2 numbers and calls one of the above functions
function operate(operator, x, y) {
    if (operator === 'add'){
        return add(x,y);
    }
    else if (operator === 'subtract') {
        return subtract(x,y);
    }
    else if (operator === 'multiply') {
        return multiply(x,y);
    }
    else {
        return divide(x,y);
    }
};

//display value 
let display = ""

//Create function that populates display when you click the number buttons
// Add event listener to all the buttons
document.addEventListener('DOMContentLoaded', () =>
    {document.querySelectorAll('.buttons').forEach(button => {button.onclick = function () {
        // continue to add numbers to the display screen
        document.getElementById('display').innerText = (document.getElementById('display').innerText + button.value);
        // adds display screen string to display variable, then convert to int
        display = parseInt(document.getElementById('display').innerText)
    }
});
});



// store first Number that is input into the calculator when a user presses an operator
