// In JavaScript, understanding different types of scopes is crucial as it determines the accessibility 
// of variables and functions in your code. Scope essentially defines the context in which values 
// and expressions are visible or can be accessed. JavaScript primarily deals with three main 
// types of scopes:


Global Scope
Function (Local) Scope
Block Scope
Module Scope (with ES6+ modules)

// 1. Global Scope
// A variable declared outside any function or block becomes globally accessible from 
// any part of the code after its declaration. Anything defined in the global scope can be 
// modified from any part of the program, which can potentially lead to security and 
// maintainability issues.

var globalVar = 'I am global';

function display() {
    console.log(globalVar); // Accesses the global variable
}

display(); // Outputs: I am global
console.log(globalVar); // Also outputs: I am global


// 2. Function (Local) Scope
// Variables declared within a function are local to that function and cannot be 
// accessed from outside the function. This applies to function parameters as well.

function localExample() {
    var localVariable = 'I am local';
    console.log(localVariable); // Accessible here
}

localExample(); // Outputs: I am local
console.log(localVariable); // Error: localVariable is not defined

// 3. Block Scope
// Introduced in ES6 with the let and const keywords, block scope restricts the visibility of 
// a variable to the block in which it is declared, like within an if statement or a loop, 
// rather than the entire function.


function blockExample() {
    if (true) {
        let blockScoped = 'Visible inside this block';
        console.log(blockScoped); // Works here
    }
    console.log(blockScoped); // Error: blockScoped is not defined
}

blockExample();

// Block scope is particularly useful when dealing with loops, making it easier to track the 
// lifecycle of variables and prevent unintended side-effects or bugs.



// 4. Module Scope
// When using JavaScript modules (ES6+), each module has its own scope, and top-level variables, 
// functions, or classes declared in a module are not visible to other scripts unless explicitly 
// exported and imported.

// In a file named exampleModule.js
let moduleScoped = 'Only accessible within this module, unless exported';

export function publicFunction() {
    console.log(moduleScoped); // Accessible here because it's within the same module
}

// In another file that imports exampleModule.js
import { publicFunction } from './exampleModule.js';
publicFunction(); // Works fine and logs what moduleScoped variable holds.
console.log(moduleScoped); // Error: moduleScoped is not defined

