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
var display = document.querySelector('.displayText'); //is a paragraph element
var addButton = document.querySelector('#addButton');
var subButton = document.querySelector('#subButton');
var multButton = document.querySelector('#multButton');
var divButton = document.querySelector('#divButton');

digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );
digit1.addEventListener('click', function() { alert('hi');} );








