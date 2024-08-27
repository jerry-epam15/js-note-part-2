//In JavaScript, every object has a property named [[Prototype]] 
//(often referred to as the "prototype" of the object) that points to another object. 
//This linked object is where the object inherits its properties and methods from. 
//The [[Prototype]] property forms the backbone of prototypal inheritance in JavaScript, 
//allowing for shared methods and properties and reduced memory usage across instances.


//Understanding the Prototype

//The [[Prototype]] property, often accessed via the __proto__ accessor 
//(though using __proto__ is generally discouraged in favor of methods like Object.getPrototypeOf()), 
//directly links an object to its prototype. Each object can have a prototype, and 
//that prototype object can have its own prototype, forming a "prototype chain". 
//The chain ends when an object’s prototype is null. The root of this chain in 
//JavaScript for standard objects is Object.prototype, which has a prototype of null.


//How Prototypes Are Used

//1.Method and Property Lookup: When you try to access a property or method of an object, 
//JavaScript first looks on the object itself. If it does not find it there, it looks on its 
//prototype. It continues looking up the prototype chain until it finds the property/method or 
//reaches null, indicating the end of the chain.

//Adding Methods to Constructors via Prototypes: Constructors in JavaScript 
//(custom functions or built-in like Array, Object, etc.) use prototypes to share 
//methods across all instances. Instead of defining methods directly inside the 
//constructor function, which would create a new instance of the method for 
//each object, defining them on the constructor’s prototype means all 
//instances share one set of methods, which saves memory.


function Person(name) {
    this.name = name;
}

// Add a method to the prototype
Person.prototype.sayName = function() {
    console.log(this.name);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.sayName();  // Outputs: Alice
person2.sayName();  // Outputs: Bob

console.log(person1.sayName === person2.sayName);  // true, shared method




// Understanding Object Prototypes
// For objects created using object literals, the default prototype is Object.prototype.




const obj = {};
console.log(obj.__proto__ === Object.prototype); // true



// Specialty Methods for Handling Prototypes

// Object.getPrototypeOf(obj): Preferred way to get the prototype of obj.

// Object.setPrototypeOf(obj, prototype): Sets the prototype (i.e., the [[Prototype]]) of a specified
// object to another object or null.

// Object.create(proto, [propertiesObject]): Creates a new object with the specified prototype 
// object and properties.






//prototype in case of inheritence of js



// In JavaScript, prototypes play a central role when it comes to implementing inheritance. 
// Inheritance in JavaScript is prototypal, meaning that objects inherit directly from other objects.


//1.Basic Prototype Inheritance

// In prototypal inheritance, an object can inherit properties and methods from another 
// object via prototypes. Here’s a basic example:


const parent = {
    greet: function() {
        console.log("Hello!");
    }
};

const child = Object.create(parent);
child.greet();  // Outputs: "Hello!"



//In this case, child inherits from parent through the prototype chain. 
//The Object.create() method creates a new object (child) with its prototype set to 
//the object passed as its first parameter (parent). Therefore, child can access all 
//properties and methods of parent through the prototype chain.



//2.Constructor Function and Prototype

//Constructor functions are often used in JavaScript to simulate classes 
//(before ES6 introduced the class keyword). Here's how you can use constructor 
//functions with prototypes to achieve inheritance:



function Animal(sound) {
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

function Dog(sound, breed) {
    Animal.call(this, sound);  // Call the parent constructor with `this` context and parameters
    this.breed = breed;
}

// Setting Dog's prototype to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

// Resetting the constructor property to correctly point to Dog
Dog.prototype.constructor = Dog;

Dog.prototype.showBreed = function() {
    console.log(this.breed);
};

const myDog = new Dog("Woof", "Labrador");
myDog.makeSound();  // Woof
myDog.showBreed();  // Labrador



//3.ES6 Class Inheritance

//With the introduction of ES6 classes, the mechanics of inheritance might look 
//different syntactically but under the hood, it still uses prototypes:

class Animal {
    constructor(sound) {
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(sound, breed) {
        super(sound);  // calls the parent class constructor
        this.breed = breed;
    }

    showBreed() {
        console.log(this.breed);
    }
}

const myDog = new Dog("Woof", "Labrador");
myDog.makeSound();  // Woof
myDog.showBreed();  // Labrador




//dinso proto ??

//What is __proto__?
//__proto__ is an accessor property (consisting of a getter function and a setter function) 
//on Object.prototype that exposes the internal prototype linkage ([[Prototype]]) of an object 
//through which it directly inherits properties. Essentially, __proto__ provides a way to get or 
//set the prototype of an object.

// Usage of __proto__
// Here is a basic example of how __proto__ is used in JavaScript:


const animal = {
    eat: true
  };
  
  const dog = {
    bark: true
  };
  
  dog.__proto__ = animal;
  
  console.log(dog.eat); // true, inherited from the animal prototype
  console.log(dog.bark); // true, own property



// Example Using Recommended Methods
// Instead of using __proto__, you can achieve similar functionality like this:

const animal = {
    eat: true
  };
  
  const dog = Object.create(animal);
  dog.bark = true;
  
  console.log(dog.eat); // true, inherited from the animal object
  console.log(dog.bark); // true, own property





//can we allocate the fucntion specifically 