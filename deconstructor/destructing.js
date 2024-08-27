//Destructuring assignment



// Destructuring in JavaScript is a convenient syntax that allows you to unpack values from arrays, 
// or properties from objects, into distinct variables. It simplifies the process of accessing and 
// using items in arrays or properties in objects, making the code cleaner and more readable.

// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.


// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into 
// a bunch of variables, as sometimes that’s more convenient.

let arr =[2,4,5,6];
const [first,,,last] =arr
console.log(first)


//Array destructuring


// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith


// split or other array-returning methods:

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith


// Destructuring” does not mean “destructive”.
// It’s called “destructuring assignment,” because it “destructurizes” by 
// copying items into variables. However, the array itself is not modified.

//It’s just a shorter way to write:

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];




// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul




// Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);


// Assign to anything at the left-side
// We can use any “assignables” on the left side.

// For instance, an object property:

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith



// Looping with .entries()
// In the previous chapter, we saw the Object.entries(obj) method.

// We can use it with destructuring to loop over the keys-and-values of an object:

let user = {
  name: "John",
  age: 30
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}


// The similar code for a Map is simpler, as it’s iterable:

let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}


// Swap variables trick
// There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)


// The rest ‘…’
// Usually, if the array is longer than the list at the left, the “extra” items are omitted.

// For example, here only two items are taken, and the rest is just ignored


let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Further items aren't assigned anywhere




// If we’d like also to gather all that follows – we can add one more parameter that gets
// “the rest” using three dots "...":

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2



// Default values
// If the array is shorter than the list of variables on the left, 
// there will be no errors. Absent values are considered undefined:

let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined



// If we want a “default” value to replace the missing one, we can provide it using =:

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)


// Default values can be more complex expressions or even function calls.
//They are evaluated only if the value is not provided.

// For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // whatever prompt gets


