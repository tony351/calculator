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


//create an object literal to save and update numbers entered by user
let calculation = {
    numbers: [],
    operators: [],
    equationTotal: 0
};

//display value 
let display = ""

//Create function that populates display when you click the number buttons
// Add event listener to all the buttons
function getDisplayValue () {
            //document.getElementById('display').innerText = ""
            // document.getElementById('display').innerText = display
            
            document.querySelectorAll('.buttons').forEach(button => {button.onclick = function () {           
            // continue to add numbers to the display screen
            document.getElementById('display').innerText +=  button.value;
            // adds display screen string to display variable, then convert to int
            display = parseInt(document.getElementById('display').innerText)
        }
    });
    };

//resetDisplay will be called in storeInput(). This helps with clearing and reentering input when chaining operators
function resetDisplay () {
    document.querySelectorAll('.buttons').forEach(button => {button.onclick = function () {
        document.getElementById('display').innerText = ""
        display = "";
        document.getElementById('display').innerText +=  button.value;
            // adds display screen string to display variable, then convert to int
        display = parseInt(document.getElementById('display').innerText)
}})}



// Then work on bugs and edge cases
// add event listeners for data keys
// refactor clear function to wipe out existing data


// // stores numbers that is input in the calculator when a user presses an operator
function storeInput () {
    document.querySelectorAll('.operator').forEach(operand => {operand.onclick = function () {
        calculation["numbers"].push(display);
        calculation["operators"].push(operand.innerText);
        //display = ""
        //document.getElementById('display').innerText = ""
        currentTotal(calculation["numbers"], calculation["operators"])
        resetDisplay();
        }})
    };


// function to get currentTotal when chaining operators
function currentTotal (numArray,operatorArray) {
    if (operatorArray.length === 2) {
        calculation["equationTotal"] = operate(operatorArray[0], numArray[0], numArray[1])
        document.getElementById('display').innerText = calculation["equationTotal"]
        display = calculation["equationTotal"]
    }
    else if (operatorArray.length > 2) {
        calculation["equationTotal"] = 0 //reset counter, then iterate
        for (i= 0; i< operatorArray.length; i++) {
            calculation["equationTotal"] = operate(operatorArray[i], calculation["equationTotal"], numArray[i])
            
            //display = calculation["equationTotal"]
    }
    document.getElementById('display').innerText = calculation["equationTotal"]
}
    else {
        // calculation["equationTotal"] = operate(calculation["operators"][0], 0, calculation["numbers"][0])
        // document.getElementById('display').innerText = calculation["equationTotal"]
        // display = calculation["equationTotal"]
         document.getElementById('display').innerText = display
    }
}


//execute Functions when users presses the "=" key
function equals () {
    // if equals is clicked when theres nothing in display aka first thing
        document.querySelector('#equals').addEventListener('click', function () {
            if (display === "") {
                document.getElementById('display').innerText = ""
                // when spamming = when display is empty, it will return NaN because it's adding
                // "" and "=" into the arrays in the object. popping them out will stop this issue
                calculation["numbers"].pop()
                calculation["operators"].pop()
            }           
            else {
                display = (calculateTotal(calculation["numbers"], calculation["operators"]))
                document.getElementById('display').innerText = display}
            }) 
    };

 // iterates over the two arrays in the calculation object, returns total
function calculateTotal (numArray, operatorArray) {
    let total = operate(operatorArray[0], numArray[0], numArray[1]);

    if (numArray.length > 2) {
        for (i= 2; i< numArray.length; i++) {
            total = operate(operatorArray[i-1], total, numArray[i])
        }
        return total;
    }
    else {
        return total;
    }
    return total;
    };



// clear button 
document.addEventListener('DOMContentLoaded', () =>    
    {document.querySelector('#clear').addEventListener('click', function () {
        document.getElementById('display').innerText = ""
        display = ""
        calculation["numbers"] = [];
        calculation["operators"] = [];
        calculation["equationTotal"] = 0;
    })});


document.addEventListener('DOMContentLoaded',getDisplayValue);
document.addEventListener('DOMContentLoaded', storeInput);
document.addEventListener('DOMContentLoaded', equals);
