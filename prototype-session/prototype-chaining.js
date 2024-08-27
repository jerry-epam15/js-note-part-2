//prototype chaining -- prototype linking

// In JavaScript, the terms "prototype chaining" and "prototype linking" refer to the mechanism by 
// which JavaScript objects inherit features from one another. This core concept defines how 
// properties and methods are passed down from one object to another, creating a chain of objects 
// linked through their prototypes. This feature is a fundamental aspect of JavaScript's 
// prototype-based inheritance model.



Understanding the Prototype Chain

// Prototype chaining, also known as prototypal chaining, occurs when an object inherits 
// properties and methods from another object. Each object has an internal and hidden property 
// known as [[Prototype]] (accessible in most environments as __proto__), which points to its 
// prototype object (the object it inherits from).


Here's how prototype chaining works:


// Looking Up Properties: When you request a property or method on an object, JavaScript starts 
// by looking for the property on the object itself.

// Traversing the Chain: If the property is not found, JavaScript follows the [[Prototype]] 
// link to the object's prototype and looks for the property there.

// Continuing Until null: This process continues, moving up the prototype chain from one 
// object to the next, until the property is found or until the end of the chain is reached 
// (i.e., when a prototype's [[Prototype]] is null, such as Object.prototype.__proto__).


//EXAMPLE OF THE PROTOTYPE CHAINING 


function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function() {
    console.log(this.name + ' eats.');
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(this.name + ' barks.');
};

const buddy = new Dog('Buddy');
buddy.eat();  // Buddy eats.
buddy.bark(); // Buddy barks.



In this example:

//Dog inherits from Animal using prototypal inheritance.

//When buddy.eat() is called, JavaScript checks the buddy object for an eat method. 
//Not finding it directly on buddy, JavaScript then checks buddy's prototype, which is Dog.prototype.
//Since eat is also not found on Dog.prototype, JavaScript follows the prototype chain 
//further up to Animal.prototype, where it finds and executes eat.




//BACK TO CLASS


//if we are looking for the age property 
//its there in the current object
//suppose we are looking for the email

//it will check in the current object if it is not there 
//it will look for  one prototype  level up and check there  at object.prototype
//it will check until object.prototype =null




{
    age:20,
}



let obj ={
    age:20
}

console.log(obj.age);

console.log(obj.email);

console.log(obj.__proto__);
//see the prototype of the obj

console.log(obj.__proto__===Object.prototype);//true



Why obj.__proto__ === Object.prototype is True

// In JavaScript, Object.prototype is the prototype of all objects created using object 
// literals or the Object constructor unless explicitly specified otherwise 
// (like objects created using Object.create(anotherObject) or Object.create(null)).

// __proto__ is a property that points to the prototype of the object from which it inherits properties. 
// This link is what forms the prototype chain.

// Given that you've created obj using object literal syntax, its prototype is 
// automatically set to Object.prototype. Hence, obj.__proto__ === Object.prototype evaluates to true.


//The way through which we can achieve the inheritence 

//go to javascript.info prototype


