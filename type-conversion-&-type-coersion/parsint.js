// Parsing Functions for Explicit Conversion

// parseInt and parseFloat:
// These functions parse a string and return an integer or floating-point number. 
// They stop reading the string when they reach a character that isn't valid for the 
// specified number format.


let floatString = '3.14someRandomString';
let number = parseFloat(floatString);
console.log(number); // Outputs 3.14

let intString = '10.67someRandomString';
let integer = parseInt(intString);
console.log(integer); // Outputs 10



// Special Cases and Things to Note
// Null and Undefined:
// javascript


Number(null);         // Converts to 0
Number(undefined);    // Converts to NaN
Boolean(null);        // Converts to false
Boolean(undefined);   // Converts to false


// Empty Strings and Arrays:
// javascript


Number('');           // Converts to 0
Number(' ');          // Also converts to 0
Number([]);           // Converts to 0
Number([20, 30]);     // Converts to NaN because it's not a single numeric value


