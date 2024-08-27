// NUMBER CONVERSTION 
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

alert( "6" / "2" ); // 3, strings are converted to numbers


//FAILED NUMBER CONVERSTION 

//If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed


//NUMBER CONVERSTION RULES 

// undefined->	NaN
// null ->	0
// true and false	->1 and 0
// string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) 
// from the start and end are removed. If the remaining string is empty, the result is 0.
// Otherwise, the number is “read” from the string. An error gives NaN.


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


//STRING CONVERSTION 

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

//BOOLEAN CONVERSTION 

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string,
// null, undefined, and NaN, become false.
// Other values become true.


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)



// In JavaScript, type conversion refers to the process of converting values from one data type 
// to another. This can happen explicitly or implicitly, depending on whether the conversion is 
// intended by the programmer (explicit) or performed automatically by JavaScript (implicit). 
// Understanding type conversion is crucial because it affects how expressions evaluate and can 
// lead to unexpected behaviors if not managed correctly.


// Types of Type Conversion
// Implicit Conversion (Type Coercion)
// Explicit Conversion (Type Casting)


// 1. Implicit Conversion (Type Coercion)
// Implicit conversion, or type coercion, occurs when JavaScript automatically 
// converts one data type to another when executing code. This typically happens 
// because an operation must be performed that requires the operands to be of the same type.

// Examples of Implicit Conversion
// Numeric String to Number:

let result = '5' - '2'; // Subtraction operator coerces string to numbers
console.log(result); // Outputs 3

//Boolean to Number:

let result = '5' - true; // true is converted to 1
console.log(result); // Outputs 4

//Non-numeric string to Number results in NaN:

let result = 'hello' * 10; // Can't convert 'hello' to a number
console.log(result); // Outputs NaN

//Object to Primitive:

let obj = { valueOf: function() { return 100; } };
let result = obj + 200; // Object is converted to primitive (number)
console.log(result); // Outputs 300



//2. EXPLICIT CONVERSION (Type Casting)
// Explicit conversion, also known as type casting, occurs when you manually 
// convert from one type to another using built-in functions. This method is 
// used when you are aware of the type conversion and you are implementing it purposefully.

Examples of Explicit Conversion

String to Number:

let stringValue = '123';
let numberValue = Number(stringValue);
console.log(numberValue); // Outputs 123

Number to String:

let numberValue = 123;
let stringValue = String(numberValue);
console.log(stringValue); // Outputs '123'

Boolean to String:

let booleanValue = true;
let stringValue = String(booleanValue);
console.log(stringValue); // Outputs 'true'

String to Boolean:

let stringValue = 'hello';
let booleanValue = Boolean(stringValue); // Any non-empty string is true
console.log(booleanValue); // Outputs true


