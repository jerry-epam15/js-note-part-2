//LEXICAL SCOPE

//In JavaScript, lexical scope, also known as static scope, refers to the accessibility 
// of variables based on the hierarchical structure of the code during the time it's written, 
// as opposed to dynamic scope which would depend on the program's execution. Lexical scope 
// means that the scope of variables is determined at compile time, based on the layout of 
// the code itself.



// How Lexical Scope Works:

// Nested Functions:
// In JavaScript, functions can be nested within other functions. Each function has access to its 
// own scope (variables defined inside the function itself) as well as access to any variables of 
// its outer (parent) functions.

// Chain of Scopes: 
// Each nested level of the function forms a scope chain. 
// This chain defines what variables can be accessed by each function. 
// Essentially, every inner function can access its own scope, the scope of its parent function, 
// and ultimately up to global scope.



var globalVar = "global";

function outerFunction() {
    var outerVar = "outer";

    function innerFunction() {
        var innerVar = "inner";
        console.log(innerVar);   // Prints "inner"
        console.log(outerVar);   // Prints "outer"
        console.log(globalVar);  // Prints "global"
    }

    innerFunction();
    console.log(outerVar);       // Prints "outer"
    console.log(globalVar);      // Prints "global"
    // console.log(innerVar);    // Error: innerVar is not defined
}

outerFunction();
console.log(globalVar);          // Prints "global"
// console.log(outerVar);       // Error: outerVar is not defined


// In this example, innerFunction has access to variables innerVar (its own scope), outerVar 
// (its parent's scope), and globalVar (the global scope). However, outerFunction does not have 
// access to innerVar because that variable is scoped locally to innerFunction.


// Characteristics of Lexical Scope:

// Predictability: The scope of variables is resolved at write-time (when the code is written), 
// making the behavior of variable access predictable.

// Encapsulation: Since inner functions have access to the scope of their containing functions, 
// but not vice versa, this creates an encapsulated structure where parent functions cannot 
// interfere with the internals of inner functions.

// Closure Creation: Lexical scope is essential for closures—functions that capture 
// variables from their lexical scope. When a function makes use of variables from 
// outer functions that have completed execution, those variables persist because 
// the inner function holds a reference to them.


// Practical Implications:
// Lexical scope allows developers to organize code into a hierarchical 
// structure which eases readability and maintainability. It also sets 
// the stage for powerful programming patterns, such as the module pattern 
// and immediately-invoked function expressions (IIFE) where libraries or 
// modules can keep private variables that don't pollute the global namespace.



