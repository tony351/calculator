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
    if (operator === '+'){
        return add(x,y);
    }
    else if (operator === '-') {
        return subtract(x,y);
    }
    else if (operator === '*') {
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
function getDisplayValue () {
    document.addEventListener('DOMContentLoaded', () =>
        {document.querySelectorAll('.buttons').forEach(button => {button.onclick = function () {
            // continue to add numbers to the display screen
            document.getElementById('display').innerText = (document.getElementById('display').innerText + button.value);
            // adds display screen string to display variable, then convert to int
            display = parseInt(document.getElementById('display').innerText)
        }
    });
    });
}


//create an object literal to save and update numbers entered by user
let calculation = {
    firstNum: 0,
    secondNum: 0,
    operator: ""
};

// stores first number that is input in the calculator when a user presses an operator
document.addEventListener('DOMContentLoaded', () =>
{document.querySelectorAll('.operator').forEach(operand => {operand.onclick = function () {
        calculation["firstNum"] = display;
        calculation["operator"] = operand.innerText; 
        getSecondNum();
        }})}
);


//grabs second number when equals function/key is ran
function getSecondNum() {
    let display = ""
    document.getElementById('display').innerText = display;
    getDisplayValue();
    equals();

}

//execute Functions when users presses the "=" key
function equals () {
    document.querySelectorAll('.operator').forEach(operand => {operand.onclick = function () 
        { if (operand.innerText === "=") {
            calculation["secondNum"] = display;
            document.getElementById('display').innerText = (operate(calculation["operator"], calculation["firstNum"], calculation["secondNum"]));
        }
        }
    }
    )
};


// clear button 
document.addEventListener('DOMContentLoaded', () =>    
    {document.querySelector('.clear').addEventListener('click', function () {
        document.getElementById('display').innerText = ""
        display = ""
    })});


getDisplayValue();
