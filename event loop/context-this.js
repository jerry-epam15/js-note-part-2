//In JavaScript, the value of this (often referred to as the "context") depends 
//on how a function is called. It's a keyword that refers to the object it belongs to. 
//Understanding different ways to control and determine the value of this is crucial in JavaScript.


//Types of Context in JavaScript


//1.Global Context: 

//When this is not inside any function or when used in a global scope, 
//it refers to the global object. In a browser, it's typically window, whereas in Node.js, 
//it's global.

//rule 1----at global level this refers to window object // above example 

console.log(this === window); // true in a browser

function show(){
    console.log("hi i m show function")
}

show();//
window.show();//same output 

this.show();


//2.Function Context:

//A/ Simple Function Call: Here, this will default to the global object, or be undefined in strict mode.

function show() {
    console.log(this === window);  // true in non-strict mode in a browser
    console.log(this === undefined); // true in strict mode
}
show();


//rule3--- inside function at global level this refers to window

//B/ Method Call: When a function is called as a property on a parent object, this refers to the parent object.

const obj = {
    method: function() {
        console.log(this);
    }
};
obj.method(); // `this` refers to `obj`

//rule -2 ------  in method/function inside object "this" refres to owenr/current object


let user = {
    id:1,
    name:"test1",
    show:function(){
        console.log("i am show inside object")
        console.log(this); //this refers to user//rule 2
    }
}

user.show();

console.log(user.id)
console.log(user.name)
console.log(user.show())//all are this accessible 



//3.Class Context: 

//Inside a class, this refers to the instance of the class.

class Example {
    constructor() {
        console.log(this); // The instance of the class
    }
}
new Example();





// rule -----4> inside arrow function "this" refers to it surronding env/lexical env---
//reason is arrow function doenst have their own "this" value



let company = {
    name:"EPAM",
    showName:function(){
        console.log(this);//compny
    },
    showName2:()=>{
        console.log(this);//window // arrow doesm't have  there own this so 
    }
}

company.showName();
company.showName2();



//rule-5//5 inside object if we have any method, and inside that method any inner function present then this refers to window----








//Explicit Context of this



// Explicit context setting refers to scenarios where you can precisely set what 
// this should refer to using call(), apply(), or bind().


//1.call(): This method calls a function with a given this value and arguments provided individually.


function sayName(label) {
    console.log(label + ':', this.name);
}

const person = {
    name: 'Alice'
};

sayName.call(person, 'Name');  // Outputs: "Name: Alice"



//2.apply(): Similar to call(), but the arguments are passed as an array.


function sayName(label) {
    console.log(label + ':', this.name);
}

const person = {
    name: 'Alice'
};

sayName.apply(person, ['Courtesy']); // Outputs: "Courtesy: Alice"


//3.bind(): This method creates a new function that, when called, has its this keyword set to 
//the provided value, with a given sequence of arguments preceding any provided when the new 
//function is called.


function sayName(label) {
    console.log(label + ':', this.name);
}

const person = {
    name: 'Alice'
};

const sayMyName = sayName.bind(person, 'Name');
sayMyName(); // Outputs: "Name: Alice"


