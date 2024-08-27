//Custom errors, extending Error

//In JavaScript, custom errors are user-defined exceptions that can be thrown and 
//caught using the standard try...catch error handling mechanism. By creating custom 
//errors, developers can provide more detailed and meaningful error information, which 
//can make debugging easier and improve the overall robustness of the application. 
//This approach is particularly useful when you want to handle specific error types 
//differently or provide more context than what built-in error types (like Error, 
//TypeError, ReferenceError, etc.) offer.


// Creating Custom Errors in JavaScript
// To create a custom error, you typically extend the built-in Error class. 
// This involves setting the prototype of your custom error class to an instance of Error. 
// Here’s how you can define and use a custom error:


// Define a custom error class
class CustomError extends Error {
    constructor(message) {
      super(message); // Call the superclass constructor with the message.
      this.name = this.constructor.name; // Set the error name to the name of the class.
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor); // Captures the stack trace
      }
    }
  }
  
  // Function that throws a custom error
  function doSomethingBad() {
    throw new CustomError('It went bad!');
  }
  
  // Using the custom error
  try {
    doSomethingBad();
  } catch (e) {
    console.error(e.name); // CustomError
    console.error(e.message); // It went bad!
  }


  //Why Use Custom Errors?
  
  //Clarity and Specificity: Custom errors allow you to specify exactly what kind of 
  //error occurred, making it clearer why the error was thrown. This is especially 
  //useful in complex applications, where different kinds of errors might need 
  //different handling strategies.
  
  //Improved Debugging: By providing explicit error names and messages, 
  //and customizing the stack trace, you can make debugging more straightforward.
  
  //Graceful Error Handling: Custom errors can be detected and handled 
  //separately in a large try-catch block that handles different types 
  //of errors differently. This is useful in maintaining application stability 
  //and providing a better user experience.
  
  //Standardization: Well-defined custom errors can become part of your 
  //application’s API, which can help other developers understand and 
  //correctly handle the failures modes of your functions or classes.