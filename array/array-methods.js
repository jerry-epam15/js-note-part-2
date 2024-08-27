// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.


//ADDITIONAL ARRAY METHOD 


//DELETING ELEMENTS IN ARRAY 


let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert(arr[1]); // undefined

// now arr = ["I",  , "home"];
alert(arr.length); // 3



//SYNTAX FOR THE ARRAY DELETION //SPLICE 

arr.splice(start[, deleteCount, elem1, ..., elemN])

//REMOVING THE ONE ELEMENTS

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert(arr); // ["I", "JavaScript"]


//REPLACE ELEMENTS IN ARRAY 

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert(arr) // now ["Let's", "dance", "right", "now"]

//SEE THE REMMOVED 

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert(removed); // "I", "study" <-- array of removed elements


//ADDING AT THE END 

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert(arr); // "I", "study", "complex", "language", "JavaScript"

//SLICE


//syntax
arr.slice([start], [end])


let arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)

alert(arr.slice(-2)); // s,t (copy from -2 till the end)


//CONCAT

arr.concat(arg1, arg2...)

let arr = [1, 2];

// create an array from: arr and [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

//ITERATE FOR EACH 

arr.forEach(function (item, index, array) {
    // ... do something with an item
});


// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);


// FOR EACH IN different 

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});


//Search in array 

//indexof 

let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1

alert(arr.includes(1)); // true

//lastindex of 

let fruits = ['Apple', 'Orange', 'Apple']

alert(fruits.indexOf('Apple')); // 0 (first Apple)
alert(fruits.lastIndexOf('Apple')); // 2 (last Apple)


//find and findIndex/findLastIndex


//FIND

// an array of objects. How do we find an object with a specific condition?

// Here the arr.find(fn) method comes in handy.

let result = arr.find(function (item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
});

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

//FIRST INDEX AND LAST INDEX

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3


// filter
// The find method looks for a single (first) element that makes the function return true.

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2



//Transform an array

//MAP

let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
  });




let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6



//sort(fn)

//The call to arr.sort() sorts the array in place, changing its element order.


let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2

// The order became 1, 15, 2. Incorrect. But why?

// The items are sorted as strings by default.

// Literally, all elements are converted to strings for comparisons.
//  For strings, lexicographic ordering is applied and indeed "2" > "15".

// To use our own sorting order, we need to supply a function as the argument of arr.sort().

// The function should compare two arbitrary values and return:


//Split into letters

let str = "test";

alert( str.split('') ); // t,e,s,t


//JOIN

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul


//REDUCE 

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

// 1
// sum 0 current 1
// 2
// sum 0+1 current 2
// 3
// sum 0+1+2 current 3
// 4
// sum 0+1+2+3 current 4
// 5
// sum 0+1+2+3+4 current 5
// 15



//ARRAY.FROM
// For this particular task we could also use Array.from, because 
//it converts an iterable (like a string) into an array:

let str = "Hello";

// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o


