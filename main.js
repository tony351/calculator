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
    numbers: [],
    operators: []
};


// NOTE: Next steps, show total in display after each order of operation when chaining numbers
// We are only showing the total when we hit enter
// May need to refactor the getdisplayvalue fucntion and create new function that takes in calclation
// need to change font size of display value

// Then work on bugs and edge cases
// add event listeners for data keys
// refactor clear function to wipe out existing data


// // stores numbers that is input in the calculator when a user presses an operator
function storeInput () {
    document.querySelectorAll('.operator').forEach(operand => {operand.onclick = function () {
        calculation["numbers"].push(display);
        calculation["operators"].push(operand.innerText);
        display = "";
        document.getElementById('display').innerText = ""
        getDisplayValue();
        }})
    };



// iterates over the two arrays in the calculation object, returns total
function calculateTotal (numArray, operatorArray) {
    let total = operate(operatorArray[0], numArray[0], numArray[1]);

    if (numArray.length > 2) {
        for (i= 2; i< numArray.length; i++) {
            total = operate(operatorArray[i-1], total, numArray[i])  
        }
    }
    else {
        document.getElementById('display').innerText = total;
    }
    document.getElementById('display').innerText =  total;
    };



//execute Functions when users presses the "=" key
function equals () {
    document.querySelector('#equals').addEventListener('click', function () {
        return (calculateTotal(calculation["numbers"], calculation["operators"]));
        }
      )};

 



// clear button 
// **also need to clear out the dictionary
document.addEventListener('DOMContentLoaded', () =>    
    {document.querySelector('#clear').addEventListener('click', function () {
        document.getElementById('display').innerText = ""
        display = ""
    })});


getDisplayValue();
document.addEventListener('DOMContentLoaded', storeInput);
document.addEventListener('DOMContentLoaded', equals);
