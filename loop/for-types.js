//In JavaScript, there are several types of for loops that you can use:

//1.For loop: This is the most common loop, 
//which repeats until a specified condition evaluates to false.

for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

//2.For...In loop: This loop is used to iterate 
//over the enumerable properties of an object.

//For...In Loop: This loop is ideal when you have an object and 
// you want to iterate over its properties.
// Remember though, it does not guarantee the order of properties.

//if we use this indexes will print 

let person = { name: "John", age: 25, city: "London"};

for (let key in person) {
    console.log(key + ": " + person[key]);  // "name: John", "age: 25", "city: London"
}

//3.For...Of loop: Introduced in ES6.
//This loop is used to iterate over iterable 
//objects like arrays, strings, maps, sets, etc.


// This loop is best when you need to iterate over 
// iterable objects (like arrays, strings, Maps, Sets, etc.) and 
// you're not necessarily concerned with the index 
// value but more with the values inside the iterable.


let names = ['John', 'Jane', 'Jim'];

for (let name of names) {
    console.log(name); // "John", "Jane", "Jim"
}

