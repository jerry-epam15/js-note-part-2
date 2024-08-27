//In JavaScript, functions can be created and used in various ways according 
//to different programming patterns and needs. Let’s look at different types or 
//ways to declare and use functions, including the points you've listed:

            //1.Function Declarations (with Parameters)

// A standard way to define a function in JavaScript is by using a function declaration. 
// You can also include parameters that allow you to pass data into the function when it is called.

function greet(name, greeting = "Hello") {
    console.log(greeting + ", " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!



            //2.Arrow Functions

// Introduced in ES6 (ECMAScript 2015), arrow functions provide a more concise syntax 
// for writing function expressions. They don’t have their own bindings to this or super, 
// and are often best suited for non-method functions.

const multiply = (a, b) => a * b;

console.log(multiply(5, 3)); // Outputs: 15


            //3. Immediately Invoked Function Expressions (IIFE)

// An IIFE is a function that runs as soon as it is defined. IIFEs are typically
// used to create private scopes.

// This function executes right away without needing a separate call. 
// Variables inside an IIFE cannot be accessed from the outside, providing a degree of isolation.

(function() {
    let message = "Hello, IIFE!";
    console.log(message);
})();






//IIFE

// An Immediately Invoked Function Expression (IIFE, pronounced "iffy") is a function in 
// JavaScript that runs as soon as it is defined. It is a design pattern which is also 
// known as a Self-Executing Anonymous Function and contains two major parts. The first is 
// the anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE as well as polluting the global scope.
// The second part creates the immediately invoking function expression () through which the 
// JavaScript engine will directly interpret the function.



//Structure of an IIFE
//An IIFE can be written in a couple of different ways. Here is the most common syntax:


(function() {
    console.log("This is an IIFE!");
})();

//Reasons to Use an IIFE
//1Avoid Polluting the Global Scope: Variables defined inside an IIFE are not visible 
//outside its scope. This helps in avoiding global scope pollution, 
//which is a good practice and prevents variable conflicts.

//2.Immediately Run Configuration Code: IIFEs are often used to bootstrap or 
//initialize applications without leaving any footprint. This is useful in scenarios 
//where some setup needs to run immediately without affecting the global namespace.

//3.Create a Private Scope for Variables: Since JavaScript's function scope works over 
//block scope, using an IIFE is a way to create new variables that other parts of the code 
//can't access directly.


// In the past, as there was only var, and it has no block-level visibility, programmers 
// invented a way to emulate it. What they did was called “immediately-invoked 
// function expressions” (abbreviated as IIFE).

// That’s not something we should use nowadays, but you can find them in old scripts.

// An IIFE looks like this:

(function() {

  var message = "Hello";

  alert(message); // Hello

})();



// Here, a Function Expression is created and immediately called. 
// So the code executes right away and has its own private variables.

// The Function Expression is wrapped with parenthesis (function {...}), 
// because when JavaScript engine encounters "function" in the main code, 
// it understands it as the start of a Function Declaration. 
// But a Function Declaration must have a name, so this kind of code will give an error:

// Tries to declare and immediately call a function
function() { // <-- SyntaxError: Function statements require a function name

  var message = "Hello";

  alert(message); // Hello

}();
// Even if we say: “okay, let’s add a name”, that won’t work, 
// as JavaScript does not allow Function Declarations to be called immediately:


// syntax error because of parentheses below
function go() {

}(); // <-- can't call Function Declaration immediately

// So, the parentheses around the function is a trick to show 
// JavaScript that the function is created in the context of another 
// expression, and hence it’s a Function Expression: it needs no name and can be called immediately.

// There exist other ways besides parentheses to 
// tell JavaScript that we mean a Function Expression:



// Ways to create IIFE

(function() {
    alert("Parentheses around the function");
  })();
  
  (function() {
    alert("Parentheses around the whole thing");
  }());
  
  !function() {
    alert("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    alert("Unary plus starts the expression");
  }();



//4. Function Expressions

// A function expression involves defining a function as part of a larger expression syntax 
// (typically a variable assignment). Function expressions allow for the creation of anonymous functions.


const greet = function(name) {
    console.log(`Hello, ${name}`);
};

greet("Alice"); // Outputs: Hello, Alice


// Function expressions can be used as closures and are often passed as arguments 
// to higher-order functions.



//5.Generator Functions

// Generator functions are a special class of functions that simplify the task of 
// writing iterators. A generator is a function that can stop midway 
// and then continue from where it stopped. This is defined by 
// adding an asterisk (*) after the function keyword.


function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Generators are useful for managing flow control, 
// especially in asynchronous programming (e.g., handling Promises).



