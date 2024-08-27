//An array literal is a way to define an array in a programming language 
// using a compact syntax. It is a list of elements enclosed in square 
// brackets, with each element separated by a comma. Array literals 
// provide a concise and readable way to create arrays without 
// calling constructor functions. For example, in JavaScript, 
// you can create an array of numbers using the array literal 
// [1, 2, 3, 4]. Array literals can store elements of different types, 
// and can be nested to create multidimensional arrays.



//SEVERAL WAYS TO CREATE THE ARRAY LITERAL

//there are several ways to create arrays:

//1.
//Array Literal: This is the simplest and most commonly used method 
// to create an array. It involves using square brackets [] with the 
// elements separated by commas. For example:
let arr = [1, 2, 3, 4];

//2.
// Array Constructor: This method involves using the Array constructor 
// to create an array. You can pass individual elements as arguments, 
// or pass a single number to set the initial size of the array.

let arr1 = new Array(1, 2, 3, 4);  // Creates an array [1, 2, 3, 4]
let arr2 = new Array(5);           // Creates an array with 5 empty slots

//3.

// Array.from(): This static method creates a new shallow-copied 
// Array instance from an array-like or iterable object.


let arr = Array.from("hello");  // Creates ['h', 'e', 'l', 'l', 'o']//----------------------

//4.

// Array.of(): This method creates a new Array instance with a variable number of elements.

let arr = Array.of(1, 2, 3);    // Creates an array [1, 2, 3]


//5.
// Spread operator: If you have an iterable like another array or a string, you can use the spread syntax (...) to create a new array.

let original = [1, 2, 3];
let arr = [...original];        // Creates a copy of the original array


//6.
// Using map or other array methods: Often, arrays are created as 
// the result of calling a method on another array or iterables.


let lengths = ["hello", "world"].map(word => word.length);  // Creates [5, 5]


//ARRAY LENGTH 

let array = [1, 2, 3, 4, 5];
console.log(array.length);  // Output: 5


//Setting Length: You can also set the length property to truncate or clear an array.


const numbers = [1, 2, 3, 4, 5];
numbers.length = 3;
console.log(numbers);  // Output: [1, 2, 3]

numbers.length = 0;
console.log(numbers);  // Output: []



//Length Greater than Actual Elements: When the array has "empty slots" (often called "holes"), 
//the length property still gives the count up to the last defined index plus one.

javascript


const array = [1];
array[5] = 5;
console.log(array.length);  // Output: 6
console.log(array);         // Output: [1, <4 empty items>, 5]


