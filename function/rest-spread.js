//Rest parameters and spread syntax

//REST PARAMETERS...


// A function can be called with any number of arguments, no matter how it is defined.

// Like here:

function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );


// There will be no error because of “excessive” arguments. 
// But of course in the result only the first two will be counted, 
// so the result in the code above is 3.



// The rest of the parameters can be included in the function definition by using 
// three dots ... followed by the name of the array that will contain them. 
// The dots literally mean “gather the remaining parameters into an array”.

// For instance, to gather all arguments into array args:

function sumAll(...args) { // args is the name for the array
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6



//TITLES

// We can choose to get the first parameters as variables, and gather only the rest.

// Here the first two arguments go into variables and the rest go into titles array:



function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  
showName("Julius", "Caesar", "Consul", "Imperator");



//The “arguments” variable


// There is also a special array-like object named arguments that contains all arguments by their index.

// For instance:

function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);

    // it's iterable
    // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");



//convert the above arguments into array like



//If we access the arguments object from an arrow function, 
//it takes them from the outer “normal” function.

//Here’s an example:

function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1
// As we remember, arrow functions don’t have their own this. 
// Now we know they don’t have the special arguments object either.


//SPREAD SYNTAX

// For instance, there’s a built-in function Math.max that returns the greatest number from a list:

alert( Math.max(3, 5, 1) ); // 5

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN


// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

// For Math.max:

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)



// We also can pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8


// We can even combine the spread syntax with normal values:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25



// Also, the spread syntax can be used to merge arrays:

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)



// For instance, here we use the spread syntax to turn the string into array of characters:

let str = "Hello";

alert( [...str] ); // H,e,l,l,o




//ARRAY.FROM
// For this particular task we could also use Array.from, because 
//it converts an iterable (like a string) into an array:

let str = "Hello";

// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o



//Copy an array/object

let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3




// Note that it is possible to do the same thing to make a copy of an object:

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}



