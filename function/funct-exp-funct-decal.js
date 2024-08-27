//In JavaScript, functions can be created using either a function declaration or a 
//function expression. Both approaches define functions, but they have differences 
//in hoisting behavior, syntax, and the way they can be used in your JavaScript code.


//Function Declaration

// A function declaration, also known as a function statement, uses the function keyword followed 
// by the name of the function, a list of parameters in parentheses, and the function body 
// enclosed in curly braces. One of the key characteristics of function declarations is that 
// they are hoisted, meaning the function can be called before it appears in the code.



function functionName(parameters) {
    // function body
}



function greet(name) {
    console.log('Hello ' + name);
}

greet('Alice');  // Outputs: Hello Alice



// Hoisting Behavior: Function declarations are hoisted to the top of their containing scope 
// during the compile phase, so they are available anytime within their containing scope.


//Function Expression


//A function expression involves defining a function as part of an expression.
//Function expressions can be named or anonymous; however, they typically involve
//creating a function and assigning it to a variable. Function expressions are not hoisted, 
//which means they cannot be called before they are defined in the execution flow. This is a 
//key difference from function declarations.


const functionName = function(parameters) {
    // function body
};


const greet = function(name) {
    console.log('Hello ' + name);
};

greet('Alice');  // Outputs: Hello Alice



//Hoisting Behavior: Only the variable declaration is hoisted, not the function definition.
//Therefore, a function expression cannot be called before it is defined.


// This will throw an error because the function expression is not hoisted
sayHello('Bob');  // TypeError: sayHello is not a function

const sayHello = function(name) {
    console.log('Hello ' + name);
};


//Key Differences

//Hoisting: Function declarations are hoisted (both the declaration and the function body), 
//meaning they can be used before they are physically defined in the script. 
//Function expressions are not hoisted in the same way; only the variable declaration is hoisted.

//Creation Time: Function declarations are created at parse time, before any code is executed, 
//while function expressions are created when the execution reaches them.

//Use Cases: Function expressions allow for more dynamic uses, such as defining functions 
//conditionally, using them as arguments to other functions, or returning them from other functions. 
//Function declarations provide a more structured, organized way to define reusable functionalities 
//and are generally easier to identify in the code due to their declarative nature.