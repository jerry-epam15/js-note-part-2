//FUNCTION

//Function Declaration

function showMessage() {
    alert('Hello everyone!');
}

// Local variables
// A variable declared inside a function is only visible inside that function.


function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function


// Outer variables
// A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage(); // Hello, John


// The function has full access to the outer variable. It can modify it as well.

// For instance:

let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function

//LOCAL AND GLOBAL

let userName = 'John';

function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName); // John, unchanged, the function did not access the outer variable



//PARAMETERS

function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)



//SPECIAL CASE 2 

function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann


//Default values


// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

// showMessage("Ann");

// We can specify the so-called “default” (to use if omitted) value for a 
// parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

//Returning a value

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result); // 3


//CONFIRM 

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}



