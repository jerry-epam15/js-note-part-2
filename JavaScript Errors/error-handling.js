//Error handling, "try...catch"

// syntax construct try...catch that allows us to “catch” errors so the script can, 
// instead of dying, do something more reasonable.


//The “try…catch” syntax



//The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

}


//----------------

//It works like this:

// First, the code in try {...} is executed.

// If there were no errors, then catch (err) is ignored: 
// the execution reaches the end of try and goes on, skipping catch.

// If an error occurs, then the try execution is stopped, and control flows 
// to the beginning of catch (err). The err variable (we can use any name for it) 
// will contain an error object with details about what happened.


//An example with an error: shows (1) and (3):

try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}



//To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);




//------------

//Error object


// When an error occurs, JavaScript generates an object containing the details about it. 
// The object is then passed as an argument to catch:


// For all built-in errors, the error object has two main properties:

// name
// Error name. For instance, for an undefined variable that’s "ReferenceError".

// message
// Textual message about error details.
// There are other non-standard properties available in most environments. 
// One of most widely used and supported is:

// stack
// Current call stack: a string with information about the sequence of 
// nested calls that led to the error. Used for debugging purposes.


try {
    lalala; // error, variable is not defined!
  } catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
}


//Using “try…catch”


//If json is malformed, JSON.parse generates an error, so the script “dies”.

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}


//Throwing our own errors

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (err) {
  alert( "doesn't execute" );
}

// the above we have the code run but it doesn't have the data for that show the output 


//“Throw” operator

// The throw operator generates an error.

// The syntax is:

//throw <error object>




// JavaScript has many built-in constructors for standard errors: 
// Error, SyntaxError, ReferenceError, TypeError and others. 
// We can use them to create error objects as well.



let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...




// For built-in errors (not for any objects, just for errors), 
// the name property is exactly the name of the constructor. And message is taken from the argument.

//For instance:

let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O


//Let’s see what kind of error JSON.parse generates:

try {
  JSON.parse("{ bad json o_O }");
} catch (err) {
  alert(err.name); // SyntaxError
  alert(err.message); // Unexpected token b in JSON at position 2
}



//previous case correction is 

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}

//----------


//Rethrowing



// The “rethrowing” technique can be explained in more detail as:

// 1.Catch gets all errors.
// 2.In the catch (err) {...} block we analyze the error object err.
// 3.If we don’t know how to handle it, we do throw err.
// Usually, we can check the error type using the instanceof operator:



//*****In the code below, we use rethrowing so that catch only handles SyntaxError:


let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch (err) {

  if (err instanceof SyntaxError) { //check whether the err is the type of SyntaxError
    alert( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

}

//here the internal try catch doesnt know to deal it so 

function readData() {
    let json = '{ "age": 30 }';

    try {
        // ...
        blabla(); // error!
    } catch (err) {
        // ...
        if (!(err instanceof SyntaxError)) {
            throw err; // rethrow (don't know how to deal with it)
        }
    }
}

try {
    readData();
} catch (err) {
    alert("External catch got: " + err); // caught it!
}

//---------------


//try…catch…finally


//The finally clause is often used when we start doing something and want to finalize it in any case of outcome.

// The finally clause is a great place to finish the measurements no matter what.

// Here finally guarantees that the time will be measured correctly in both situations – 
// in case of a successful execution of fib and in case of an error in it:



let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Must not be negative, and also an integer.");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);//based on the recrusive function i happens 
}

let start = Date.now();

try {
    result = fib(num);
} catch (err) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

alert(result || "error occurred");

alert(`execution took ${diff}ms`);






