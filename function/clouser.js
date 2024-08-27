//CLOUSER---

function outer(){
    var x=20;
    console.log(x);//20//functional scope
}

outer();
console.log(x);//undefined


//undefined is like that u decalred a variable but not intialized


function outer(){
    var x=20;
    return function inner(){
        console.log('hi i am inner function');
        console.log(x);//x is printed here due to clouser
    }
}

let result = outer();

result();

//closuer -- when inner function can access the outer scope variable 




// In JavaScript, a closure occurs when a function is able to remember and access its lexical scope even 
// when that function is executing outside of its lexical scope. Closures are a powerful feature of 
// JavaScript that allow functions to retain access to their scope (variables, functions, etc.) after 
// they've been executed and even when executing in different scopes. They are a consequence of how 
// JavaScript handles function scope and execution context.


// When you define a function in JavaScript, it has access to the scope in which it was created, 
// as well as to any outer scopes. This access continues to exist even if the function is executed 
// in a different scope than where it was defined. This behavior is what forms a closure.

//Here's a simple example to illustrate a closure:

function outer() {
    var outerVar = "I am from outer";

    function inner() {
        console.log(outerVar);  // Access variable from the outer function
    }

    return inner;
}

var myInner = outer();
myInner();  // Output: I am from outer




//Why Closures are Useful
//1. Data Encapsulation and Privacy: 

// Closures provide a way to create private variables and functions 
// that can't be accessed from the outside world, only from within the function. This is useful for 
// information hiding and encapsulation.


function createCounter() {
    let count = 0;
  
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

let counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.getCount());   // 1
console.log(counter.count);        // undefined (private)



//2.Maintaining State in Async Operations: 

// Closures are commonly used in callbacks, especially in asynchronous programming, 
// to preserve state across asynchronous operations.
// javascript



function asyncOperation(data, callback) {
    // simulate async operation
    setTimeout(() => {
        callback('processed ' + data);
    }, 1000);
}

function processData(data) {
    var processedData = data + ' is being processed';
    
    asyncOperation(processedData, function(result) {
        console.log(result);  // Access to processedData is preserved
    });
}

processData("Data");


//3.Currying and Function Factories: 

// Closures enable the creation of function factories and currying which are powerful concepts
// for generating functions dynamically based on initial arguments.


function multiply(a) {
    return function(b) {
        return a * b;
    };
}

let multiplyByFive = multiply(5);
console.log(multiplyByFive(2));  // 10


