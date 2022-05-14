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
var numbers = [];
var displayValue = '';
////////////////////////////////////////////////////////////

// Functions
function populateDisplay() {
    display.textContent = '';
    displayDiv.appendChild(display);
}
// Event Listeners per button //////////////////////////////

digit1.addEventListener('click', function() {
    //first show number in display
    display.textContent = ' 1 ';
    displayDiv.appendChild(display);
});
//if number of items is more than 2, go ahead and operate on them} );


digit2.addEventListener('click', function() { alert('2');} );
digit3.addEventListener('click', function() { alert('3');} );
digit4.addEventListener('click', function() { alert('4');} );
digit5.addEventListener('click', function() { alert('5');} );
digit6.addEventListener('click', function() { alert('6');} );
digit7.addEventListener('click', function() { alert('7');} );
digit8.addEventListener('click', function() { alert('8');} );
digit9.addEventListener('click', function() { alert('9');} );
clearButton.addEventListener('click', function() { alert('clear');} );
equalsButton.addEventListener('click', function() { alert('equals');} );
addButton.addEventListener('click', function() { alert('+');} );
subButton.addEventListener('click', function() { alert('-');} );
multButton.addEventListener('click', function() { alert('x');} );
divButton.addEventListener('click', function() { alert('/');} );