// Type coercion in JavaScript refers to the automatic or implicit conversion of values from 
// one data type to another when performing certain operations. This occurs because JavaScript 
// is a loosely typed or dynamic language, meaning you don't need to specify the types of variables 
// when declaring them, and data types can automatically be converted as-needed during code execution.


// How Type Coercion Works

// JavaScript will frequently coerce types to complete an operation, 
// which can have non-intuitive results if you're not expecting it. 
// This coercion typically happens during:

// Arithmetic operations: 
// When a binary operator (like +, -, *, /, etc.) is used, 
// JavaScript may convert operands to make them compatible (typically to numbers).

// Comparisons: 
// When comparing values using equality operators (==, !=, ===, !==), JavaScript 
// performs type conversions in the background to check if values are equal in type and content 
// (for non-strict comparison).

// Logical operations:
// Boolean context (if, while, &&, ||, etc.) where JavaScript converts values to boolean.




// Common Cases of Type Coercion

            // 1.String Concatenation with + Operator:

//If any of the operands is a string, other operands are converted to strings.



console.log('5' + 3);  // Outputs "53" (number 3 is coerced to a string)
console.log(3 + '5');  // Outputs "35" (number 3 is coerced to a string)

            //2.Arithmetic Operations with -, *, / Operators:

//Non-string types are usually converted to numbers.


console.log('5' - 3);  // Outputs 2 (string '5' is coerced to number)
console.log('5' * '2'); // Outputs 10 (both strings are coerced to numbers)
console.log('10' / '2'); // Outputs 5 (both strings are coerced to numbers)


            //3.Logic Operations:

//Values are coerced into booleans.


console.log('5' || '0');  // Outputs "5" (first truthy value is returned)
console.log(0 || 5);      // Outputs 5 (0 is false, 5 is true in boolean context)
console.log(0 && 5);      // Outputs 0 (0 is false and stops evaluation)


            //4.Comparison using ==:

//JavaScript tries to convert different types to the same type before comparison.


console.log('5' == 5);  // true (string '5' is coerced to number 5)
console.log(0 == false); // true (0 and false are equivalent in boolean context)


            //5.Negation with !:

//Coerces values to boolean and then negates it.


console.log(!'non-empty string');  // false ('non-empty string' is truthy, negated to false)
console.log(!'');                  // true (empty string is falsy, negated to true)

