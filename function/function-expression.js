// The syntax that we used before is called a Function Declaration:

function sayHi() {
    alert("Hello");
}



// There is another syntax for creating a function that is called a Function Expression.

// It allows us to create a new function in the middle of any expression.

// For example:

let sayHi = function () {
    alert("Hello");
};


// Function is a value

// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

// We can even print out that value using alert:

function sayHi() {
    alert("Hello");
}

alert(sayHi); // shows the function code



//COPYING THE FUNCTION 

// We can copy a function to another variable:

function sayHi() {   // (1) create
    alert("Hello");
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)




// We could also have used a Function Expression to declare sayHi, in the first line:

let sayHi = function () { // (1) create
    alert("Hello");
};

let func = sayHi;
// ...
// Everything would work the same.



//CALLBACK FUNCTION 

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);




// The major difference between a real-life ask and the example above is that real-life 
// functions use more complex ways to interact with the user than a simple confirm.

// We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);



//OR 

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);


// Function Expression vs Function Declaration

// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function (a, b) {
    return a + b;
};




//   If we use Function Declaration, it won’t work as intended:

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

    function welcome() {
        alert("Hello!");
    }

} else {

    function welcome() {
        alert("Greetings!");
    }

}

// ...use it later
welcome(); // Error: welcome is not defined


// That’s because a Function Declaration is only visible inside the code block in which it resides.

// Here’s another example:

let age = 16; // take 16 as an example

if (age < 18) {
    welcome();               // \   (runs)
    //  |
    function welcome() {     //  |
        alert("Hello!");       //  |  Function Declaration is available
    }                        //  |  everywhere in the block where it's declared
    //  |
    welcome();               // /   (runs)

} else {

    function welcome() {
        alert("Greetings!");
    }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
