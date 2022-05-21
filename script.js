//MATH FUNCTIONS
var a = 1;
var b = 1;
var c = [];
function add(a,b) {
    //array -> string -> number to do the math!
    
    //1. Copy array b (c is the copy)
     for (let i = 0; i < b.length; i++) {
        if (!opList.includes(b[i])) { //if its NOT an operator
            c.push(b[i]);
        } else {
            break;
        }
    }
    //2.Now for b, take off the second operand that will be added in this fxn
    //we want the REST of the array
    for (let i = 0; i < b.length; i++) {
        if (!opList.includes(b[i])) { //if its NOT an operator
            b.shift();   //then pop off numbers until you DO reach an operator
        } else { //once operator encountered, stop removing
            break;
        }
    }
    //3. Now iterate through c so you're only adding the next number chunk, not any after that
    //we want ONLY what will be our second operand
    for (let i = 0; i < c.length; i++) {
        if (opList.includes(c[i])) { //if it IS an operator
            c.splice(0, i); //then need to delete from this index all the way to the end
            //but then it needs to stop here, because we do want the rest of the array!
            break;
        }
    }
    //turn the arrays into strings
    a = a.join("");
    c = c.join("");
    //turn the strings into numbers
    a = Number(a);
    c = Number(c);
    return a + c;
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

/*function operate(op, a,b) {
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
}*/
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
        var newDisplayText = evaluate(operands);
        //clear screen and put sum there
        display.textContent = '';
        display.textContent = newDisplayText;
        displayDiv.appendChild(display);
    }
}

function evaluate(arr) {
    var numArr = [];
    var len = arr.length;
    let i = 0;
    //need to turn into an array if not
    if (typeof arr === "string") {
        arr = arr.split();
    }
    //EDGE CASE: need to handle edge case of something like 2+=!!
    if (opList.includes(arr[0])) { //if the expression starts with an operator
        alert('Error, cannot start expression with operator');
        arr.length = 0;
        //1 check for num, and keep going until you hit an operator
    } else {
        for (i; i < len-1;) { //for loop doesn't increment because array keeps getting shorter
            console.log(Number(arr[i]));//if (arr[i] != '=') { //not needed because it shouldn't pass the first if statement above
            if (Number(arr[i])) { //if the element is a number
                numArr.push(Number(arr[i]));
                arr.shift();
            } else if (opList.includes(arr[i])) { //it's an operator  (or equals?)
                switch(arr[i]) {
                case "+":
                    arr.shift(); 
                    sum = add(numArr, arr); //arr passes the remainder of the array to operate on
                    return evaluate(sum, arr); //keep going until the = is reached
                case "-":
                    arr.shift();
                    sum = sub(numArr, arr);
                case "x":
                    arr.shift();
                    sum = mult(numArr, arr)
                case "/":
                    arr.shift();
                    sum = div(numArr, arr);
                 //but need to call apropriate operation first
                //arr[i] which operator it is
                /*if add (pop from array) return add(numArr,)
                if sub return sub(numArr,)
                if mult return mult(numArr, )
                if div return div(numArr, )*/
                }
            } else {  //character is an equals
                console.log("I am here");
                    //the character is = and we're done
                    return sum;
                }
            }
        }
    return sum;
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
    //clear the relevant global variables
    operands.length = 0; //clears array
    sum = null;
});
equalsButton.addEventListener('click', populateDisplay);