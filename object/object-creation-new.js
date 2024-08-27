//In JavaScript, there are several ways to create objects. 
//Each method has its own use cases and benefits. Here are five common ways to create objects:



// 1. Object Literals
// The simplest and most common method to create objects in JavaScript is by 
// using object literals. This involves defining the object and its properties 
// within curly braces {}.

const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};



//2. Constructor Functions

// You can use constructor functions to create multiple objects that follow the same template. 
// Constructor functions typically start with a capital letter to distinguish them from regular functions.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello, my name is " + this.name);
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);


//3. Object.create()
// The Object.create() method creates a new object, using an existing object to provide the 
// newly created object's __proto__ (i.e., it sets up the prototype inheritance).

const proto = {
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

const person = Object.create(proto);
person.name = "John";
person.age = 30;


//here the above object pass the META DATA OF ITS to the new create the new object


//4. Class Keyword (ES6 Syntax)

// The class syntax introduced in ECMAScript 2015 (ES6) is syntactical sugar over JavaScript's 
// existing prototype-based inheritance and does not actually introduce a new object-oriented
// inheritance model. This method is clearer and more familiar to developers coming from 
// class-based languages.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const person = new Person('Alice', 25);



