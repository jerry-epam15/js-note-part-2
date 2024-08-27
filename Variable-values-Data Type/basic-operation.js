//Terms: “unary”, “binary”, “operand”

//UNARY OPERATION

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

//REMINDER

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

//Exponentiation **

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

//String concatenation with binary +

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

//Comma//******************************************* */
//The comma operator allows us to evaluate several expressions, 
// dividing them with a comma ,. Each of them is evaluated 
// but only the result of the last one is returned.
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)


let b;
let c;
let a = (b=1 + 2,c=3 + 4);
 
console.log( a )
console.log( b )
console.log( c )


//In JavaScript, the + operator before a string is a unary plus operator 
// that attempts to convert the value it precedes into a number. 
// This can often be seen as a shorthand way to force a type conversion from a string to a number.

// When you write console.log(+"1");, the +"1" expression coerces 
// the string "1" to the number 1. The unary plus (+) tries to convert its 
// operand to a number type. In this case, since "1" is a string that contains 
// a valid numeric value, it successfully converts it to the number 1.

// Therefore, the output of console.log(+"1"); will be:
//1


// Bitwise operators

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


//BITWISE AND (&)

// The bitwise AND assignment (&=) operator performs bitwise AND on the 
// two operands and assigns the result to the left operand.

let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1


//BITWISE OR 

// The bitwise OR assignment (|=) operator performs bitwise OR 
// on the two operands and assigns the result to the left operand.


let a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
// Expected output: 7

//XOR

// The bitwise XOR assignment (^=) operator performs 
// bitwise XOR on the two operands and assigns the result to the left operand.

let a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// Expected output: 6

//NOT

// In JavaScript, the bitwise NOT operator (~) is used to perform a bitwise negation on a number. 
// The bitwise NOT operator flips all the bits of its operand.

let x = 5; // In binary: 101
let result = ~x;
console.log(result); // -6

//Left shift assignment (<<=)

// The left shift assignment (<<=) operator performs left shift on 
// the two operands and assigns the result to the left operand.

let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20


//Right shift assignment (>>=)

let a = 5; //  00000000000000000000000000000101

a >>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; //  11111111111111111111111111111011

b >>= 2; //  11111111111111111111111111111110
console.log(b);
// Expected output: -2




//ZERO-FILL RIGHT SHIFT ( >>> )


// In JavaScript, the zero-fill right shift operator (>>>) is a bitwise operator that 
// shifts the bits of its left operand to the right. Unlike the regular right shift 
// operator (>>), the zero-fill right shift operator fills with zero bits from the left, 
// regardless of the sign of the original number. 
// This means it's particularly useful for unsigned 32-bit integers.




let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
 
console.log(  nickName && "Anonymous");//anonymous since check for the last 1

//SHORT CIRCUIT EVALUATION
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
 
console.log( firstName || lastName  nickName || "Anonymous");//CHECK FOR THE FIRST ONE VALUE 


//??
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
 
console.log( firstName || lastName  nickName || "Anonymous");//CHECK FOR THE FIRST defined VALUE 





 