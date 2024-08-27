//CURRYING 

//Currying is a functional programming technique used in JavaScript and other functional languages. 
//It involves transforming a function with multiple arguments into a sequence of functions, 
//each taking a single argument. This process enables partial application, where a function 
//can be called with fewer arguments than it expects and returns a new function that expects 
//the remaining arguments.


//Why Use Currying?

//Currying helps in:

//Code Reusability: Currying allows you to create reusable functions by fixing some arguments and 
//making other arguments variable.

//Function Composition and Pipeline: You can create a pipeline of functions, each function 
//transforming the output of the previous function.

//Lazy Evaluation: Arguments are evaluated only when all of them have been provided, not before, 
//allowing for deferred computation.


// Basic Example of Currying
// Consider a simple function that adds two numbers. 
// Currying converts it into a function that takes one 
// argument and returns another function expecting the next argument.



function add(a, b) {
    return a + b;
}

// Curried version
function curriedAdd(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = curriedAdd(5);
console.log(addFive(3));  // Output: 8



Currying is a functional programming technique used in JavaScript and other functional languages. It involves transforming a function with multiple arguments into a sequence of functions, each taking a single argument. This process enables partial application, where a function can be called with fewer arguments than it expects and returns a new function that expects the remaining arguments.

Why Use Currying?
Currying helps in:

Code Reusability: Currying allows you to create reusable functions by fixing some arguments and making other arguments variable.
Function Composition and Pipeline: You can create a pipeline of functions, each function transforming the output of the previous function.
Lazy Evaluation: Arguments are evaluated only when all of them have been provided, not before, allowing for deferred computation.
Basic Example of Currying
Consider a simple function that adds two numbers. Currying converts it into a function that takes one argument and returns another function expecting the next argument.

javascript


function add(a, b) {
    return a + b;
}

// Curried version
function curriedAdd(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = curriedAdd(5);
console.log(addFive(3));  // Output: 8

// In this example, curriedAdd is a curried function that first takes one argument 
// a, and then returns a new function that takes the second argument b. The constant 
// addFive is a specific function that adds 5 to any number it receives.

// More Advanced Currying
// Currying can be generalized to handle any number of arguments using 
// a more dynamic approach. Here is an example using ES6 features like arrow 
// functions and rest/spread syntax:


const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
};

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));  // Output: 6
console.log(curriedSum(1, 2)(3));  // Output: 6
console.log(curriedSum(1, 2, 3));  // Output: 6



// Usage in Real-world Scenarios
// Currying is especially useful in event handling and situations where
// you need to set up partial states in advance, and in functional programming 
// patterns that emphasize immutability and function purity. It simplifies the 
// handling of functions with numerous parameters and helps in creating high-order 
// functions that enhance functionality without redundancy.

// By breaking down function arguments into simpler, unary functions, 
// currying brings clarity and modularity to code, which is highly valued 
// in complex JavaScript applications involving functional programming techniques.




//callback hell or pyramid of doom

// In JavaScript, Callback Hell or the Pyramid of Doom refers to a 
// situation where multiple nested callbacks create a complicated and 
// hard-to-maintain code structure. This problem commonly arises in asynchronous 
// programming, where callbacks are used to handle operations that complete at a 
// later time, such as requests to a server, file operations, or any tasks that 
// require waiting for a response.


// Characteristics of Callback Hell:

// Deeply Nested Code: Several levels of nested functions, which can make the 
// code difficult to read and follow.

// Hard to Maintain: Each callback depends on the results of the previous one, 
// intertwining the logic in a way that makes the code brittle and hard to modify.

// Error Handling: Proper error handling becomes complex because each callback 
// might need its own error handling mechanism.

// Debugging Challenges: The flow of execution jumps across different functions, 
// making it harder to trace through the code.


function registerUser(username, password, callback) {
    // Simulate asynchronous API call for registering a user
    setTimeout(() => {
        console.log("User registered");
        callback(null, {username: username, password: password});
    }, 1000);
}

function loginUser(username, password, callback) {
    // Simulate asynchronous API call for logging in a user
    setTimeout(() => {
        console.log("User logged in");
        callback(null, {username: username, userData: "Some important data"});
    }, 1000);
}

function getUserData(username, callback) {
    // Simulate fetching data for the user
    setTimeout(() => {
        console.log("User data retrieved");
        callback(null, "Data for user: " + username);
    }, 1000);
}

// Example of Callback Hell
registerUser('john_doe', '123456', function(err, registrationResult) {
    if (err) {
        console.error("Error registering user");
        return;
    }
    loginUser(registrationResult.username, registrationResult.password, function(err, loginResult) {
        if (err) {
            console.error("Error logging in");
            return;
        }
        getUserData(loginResult.username, function(err, userData) {
            if (err) {
                console.error("Error getting user data");
                return;
            }
            console.log(userData); // Finally print retrieved data
        });
    });
});


// Breakdown of the Example:
// The process starts with registering a user. After the user is registered, 
// the registerUser function triggers its callback.
// Next, inside the callback of registerUser, the loginUser function is called. 
// Once the login is successful, its callback is triggered.
// Finally, inside the callback of loginUser, the getUserData function is called. 
// When user data is fetched, its callback provides the data to be handled or displayed.




// This kind of deeply nested code is what's commonly referred to as "callback hell" or 
// the "pyramid of doom" due to the triangular shape formed by the nested callbacks. 
// To manage this complexity effectively, it's often recommended to use more modern 
// approaches like Promises or the async/await syntax, which flatten the structure 
// and improve the readability and manageability of asynchronous code in JavaScript.
