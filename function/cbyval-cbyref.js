// The concepts of "call by value" and "call by reference" deal 
// with how data is passed to functions in JavaScript.


//***CALL BY VALUE **/

// When we pass a value (a primitive type: string, number, boolean, null, undefined, symbol) 
// to a function, JavaScript passes a copy of that value.
// This means that changes to the corresponding parameter of the function 
// do not affect the original variable. This is known as "Call-by-Value".


let message = 'Hello, world!';

function changeMessage(text) {
    text = 'Hi, there!';
}

changeMessage(message);

console.log(message); // 'Hello, world!'


//**Call by Reference */

// Non-primitive data types (objects and arrays) in JavaScript are passed by reference. 
// This means when these types are passed to a function,
// the function receives a reference to the original variable. 

// If the function changes the object or array, 
// those changes will affect the original variable. 
// This is known as "Call-by-Reference".

//HERE THE REFERENCE IS PASSED SO CHANGE IN ADDRESS AFFECTED SO CHANGE IN VALUE AFFECTED IN OTHER 

let person = { name: 'John Doe' };

function changeName(p) {
    p.name = 'Jane Doe';
}

changeName(person);

console.log(person.name); // 'Jane Doe'


//HERE THE VALUE ONLY PASSED SO CHANGE IN VALUE NOT AFFECT IN THE VALUE OF THE PASSED 
//HERE THE OBJECT ITSELF PASSED

let person = { name: 'John Doe' };

function changeReference(p) {
    p = { name: 'Changed' };
}

changeReference(person);

console.log(person.name); // 'John Doe'


//address based in array 

let arr = [1, 2, 3, 4, 5];

function changeArray(a) {
    a[0] = 10;
}

changeArray(arr);

console.log(arr); // Outputs: [10, 2, 3, 4, 5]

//value based in array 

let arr = [1, 2, 3, 4, 5];

function changeArrayReference(a) {
    a = [10, 20, 30, 40, 50];
}

changeArrayReference(arr);

console.log(arr); // Outputs: [1, 2, 3, 4, 5]




