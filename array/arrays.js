//array basics

//declaration 

let arr = new Array();
let arr = [];


let fruits = ["Apple", "Orange", "Plum"];

//calling the value of array

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

//length of arrays

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3

//CAN STORE ANY TYPE OF ELEMENTS

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello


//Methods pop/push, shift/unshift

// push adds an element to the end.
// pop takes an element from the end.

//POP

let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

//PUSH 

let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear


//SHIFT

let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear


//UNSHIFT

let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear


//Array is an object and thus behaves like an object.

//**************IMP */

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now


//LOOPS IN ARRAY 

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

//ANOTHER METHOD 

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}



//NEW ARRAY 

let arr = new Array(2); // will it create an array of [2] ?

alert( arr[0] ); // undefined! no elements.

alert( arr.length ); // length 2



//MULTI-DIMENSIONAL ARRAY

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
  
alert( matrix[0][1] ); // 2, the second value of the first inner array



//ARRAYS TO STRING CONVERSION 

let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true


//ARRAY SPECIAL CASES 

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"



