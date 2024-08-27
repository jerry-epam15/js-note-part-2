//In programming languages, a wrapper class is a term used to describe a class whose 
//primary purpose is to encapsulate or "wrap" a primitive or another object to provide 
//additional functionality or to adapt its interface to certain requirements. In the context 
//of JavaScript, wrapper classes refer to the built-in constructor functions that provide 
//object-oriented ways to work with primitive data types such as strings, numbers, and booleans.


//IT IS AN IMPLICIT CONVERSION

// JavaScript Wrapper Classes

// JavaScript has three primary wrapper classes corresponding to the three primitive data types 
// that often need object-like capabilities:

String Object: Wraps a primitive string.

Number Object: Wraps a primitive number.

Boolean Object: Wraps a primitive boolean.

// These classes can turn primitive values into objects temporarily to allow the use of various 
// methods that are part of their prototypes.


1. String Object

// The String object wraps JavaScript string primitives to enable the use of properties and 
// methods, like .length, .toUpperCase(), .indexOf(), et cetera. For example:



let primitiveString = "hello";
let wrappedString = new String("hello");

console.log(primitiveString.toUpperCase()); // HELLO
console.log(wrappedString.toUpperCase());   // HELLO
console.log(primitiveString.length);        // 5


2. Number Object

// Similarly, the Number object provides a wrapper around primitive numeric values. 
// It includes methods for converting numbers to fixed-point notation, exponential notation, among others.


let primitiveNumber = 123;
let wrappedNumber = new Number(123);

console.log(primitiveNumber.toFixed(2)); // "123.00"
console.log(wrappedNumber.toFixed(2));   // "123.00"



3. Boolean Object

//The Boolean object wraps a boolean value. While this object itself is less frequently used 
//for method applications, it exists for completeness and consistency among primitive types.


let primitiveBoolean = true;
let wrappedBoolean = new Boolean(true);

console.log(primitiveBoolean.valueOf()); // true
console.log(wrappedBoolean.valueOf());   // true



// Autoboxing: Primitive to Object Conversion

// JavaScript performs an automatic wrapping of primitives when necessary, 
// a process known as autoboxing. When you call a method on a primitive value, 
// JavaScript automatically wraps the primitive in its corresponding object, 
// enabling the usage of object-specific methods.


let primitiveString = "hello";
console.log(primitiveString.toUpperCase()); // HELLO
// JavaScript automatically wraps primitiveString to a String object to access toUpperCase()


Considerations When Using Wrapper Classes

//Type Identity: An important distinction is that while primitives and their wrapped 
//objects may act similar in some ways, they are not the same type. For example, an explicitly 
//created Number object is not strictly equal to its primitive value.


console.log(123 === new Number(123)); // false

// Performance: Creating object wrappers has an overhead compared to using plain primitives. 
// Unless properties or methods specific to these objects are needed, it's usually better to 
// stick with primitives.

// Potential Confusions: Explicit use of object wrappers can lead to confusing code, 
// because new instances of these objects are different from each other and the primitive they wrap.

