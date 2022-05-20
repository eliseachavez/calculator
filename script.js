//MATH FUNCTIONS
var a = 1;
var b = 1;
function add(a,b){
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mult(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

function operate(op, a,b) {
// don't need input validation if user restricted to what's on the buttons
    if ( op === '+') {
        return add(a,b);
    } else if ( op === '-') {
        return sub(a,b);
    } else if ( op === '*') {
        return mult(a,b);
    } else if ( op === '/') {
        return div(a,b);
    }
}
///////////////////////////////

/* 
1. Store all nodes as a variable
2. Create even listeners for all the buttons
3. Event listeners pass a number to another function that decides what operations from there
there may be more than one
maybe start with the event listener as something really simple, like an alert message
4.Start with just one digit and make an event listener for it. Alert for onclick.
*/ 

// Select all the digits and the display
// The buttons - could also grab as a button nodelist?
var buttonList = document.querySelectorAll('button'); //nodelist of all buttons

var digit1 = document.querySelector('#digit1');
var digit2 = document.querySelector('#digit2');
var digit3 = document.querySelector('#digit3');
var digit4 = document.querySelector('#digit4');
var digit5 = document.querySelector('#digit5');
var digit6 = document.querySelector('#digit6');
var digit7 = document.querySelector('#digit7');
var digit8 = document.querySelector('#digit8');
var digit9 = document.querySelector('#digit9');
var clearButton = document.querySelector('.clear');
var equalsButton = document.querySelector('.equals');
var addButton = document.querySelector('#addButton');
var subButton = document.querySelector('#subButton');
var multButton = document.querySelector('#multButton');
var divButton = document.querySelector('#divButton');

// The display
var display = document.querySelector('p'); //is a paragraph element
// All the parent divs
var container = document.querySelector('.calculator'); 
var displayDiv = document.querySelector('.display');
var digitGroup = document.querySelector('.digitGroup');
var digRow1 = document.querySelector('.digRow1');
var digRow2 = document.querySelector('.digRow2');
var digRow3 = document.querySelector('.digRow3');
var opClearEquals = document.querySelector('.opClearEquals');
var operatorGroup = document.querySelector('.operatorGroup');
var opRow1 = document.querySelector('.opRow1');
var opRow2 = document.querySelector('.opRow2');
var clearEquals = document.querySelector('.clearEquals');

////////////////////////////////////////////////////////////

//global variable for storing button input (array so math operations can be changed)
var operands = []; //takes every digit pressed as an input, e.g. [1,+,2, ]
var displayValue = '';
var result = null;
var displayResult;
var opList = ['+','-','x','/'];
var sum = null;
////////////////////////////////////////////////////////////

// Functions
function populateDisplay(e) {
    //populate display with digit pressed
    var currentDisplayText = display.textContent;
    var digitLabel = e.currentTarget.outerText;
    var textOnScreen = currentDisplayText + digitLabel;
    display.textContent = textOnScreen;
    displayDiv.appendChild(display);
    //////////////////////////////////
    operands.push(digitLabel);

    if (digitLabel === '=') {
        evaluate(operands);
    }
}
//TO DO
function evaluate(arr) {
    var scrapeResult = scrapeNums(arr);
    return scrapeResult;
    //is there more to evaluate in arr? then keep calling scrapeResult
    var len = arr.length;
}
function scrapeNums(arr) {
    //TO DO: need to handle edge case of something like 2+=!!
    var numArr = [];
    var opList = ['+', '-', 'x', '/'];
    var len = arr.length;
    var sum = null;
    //if a number, parse until an operator is received. convert to number. then consolidate array if multiple numbers
    //if an operator, parse only that one.
    //delete what was parsed from the array and return what was scraped
    //so only a single value returned.
    //check if it starts with an operator!
    if (opList.includes(arr[0])) { //if the expression starts with an operator
        alert('Error, cannot start expression with operator');
        //1 check for num, and keep going until you hit an operator
    } else {  
        for (let i = 0; i < len-1;) {
            console.log(Number(arr[i]));//if (arr[i] != '=') { //not needed because it shouldn't pass the first if statement above
            if (Number(arr[i])) { //if the element is a number
                numArr.push(Number(arr[i]));
                arr.shift();
            } else if (opList.includes(arr[i])) { //it's an operator  (or equals?)
                switch(arr[i]) {
                case "+":
                    arr.shift();
                    sum = add(numArr, arr); //arr passes the remainder of the array to operate on
                    //return scrapeResult(sum, arr); //keep going until the = is reached
                case "-":
                    arr.shift();
                    i++;
                    return sub(numArr, arr);
                case "x":
                    arr.shift();
                    return mult(numArr, arr)
                case "/":
                    arr.shift();
                    return div(numArr, arr);
                 //but need to call apropriate operation first
                //arr[i] which operator it is
                /*if add (pop from array) return add(numArr,)
                if sub return sub(numArr,)
                if mult return mult(numArr, )
                if div return div(numArr, )*/
                }
            } else {
                    //the character is = and we're done
                    return sum;
                }
            }
        }
    return sum;        //}
    }

// Event Listeners per button //////////////////////////////

digit1.addEventListener('click', populateDisplay);
digit2.addEventListener('click', populateDisplay);
digit3.addEventListener('click', populateDisplay);
digit4.addEventListener('click', populateDisplay);
digit5.addEventListener('click', populateDisplay);
digit6.addEventListener('click', populateDisplay);
digit7.addEventListener('click', populateDisplay);
digit8.addEventListener('click', populateDisplay);
digit9.addEventListener('click', populateDisplay);
addButton.addEventListener('click', populateDisplay);
subButton.addEventListener('click', populateDisplay);
multButton.addEventListener('click', populateDisplay);
divButton.addEventListener('click', populateDisplay);
clearButton.addEventListener('click', () => {
    display.textContent = '';
    displayDiv.appendChild(display);
});
equalsButton.addEventListener('click', populateDisplay);