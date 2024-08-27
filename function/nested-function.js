//a nested function is a function defined within another function. Nested functions 
//have access to variables declared in their outer (enclosing) function's scope. 
//This feature allows nested functions to use and manipulate variables from the outer 
//function, making nested functions a powerful tool for structuring code, enhancing encapsulation, 
//and managing the scope effectively.


function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        let innerVariable = 'I am inside!';
        console.log(outerVariable);  // Access outer function's variable
        console.log(innerVariable);  // Access own variable
    }

    innerFunction();  // Calling inner function inside the outer function
}

outerFunction();
Output:



// I am outside!
// I am inside!



//Benefits of Nested Functions
//Encapsulation: Nested functions can help to encapsulate functionality that is not needed 
//outside the containing function, hiding implementation details and internal helper functions.

// Maintaining State: Since nested functions have access to the outer function’s scope, 
// they can manipulate and maintain state across function invocations if the outer function 
// is designed accordingly (e.g., factory functions, closures).

//Currying and Partial Application: Nested functions facilitate techniques like currying,
//where a function with multiple arguments is transformed into a sequence of nesting functions, 
//each taking a single argument.