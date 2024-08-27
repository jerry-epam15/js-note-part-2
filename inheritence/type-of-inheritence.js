// In JavaScript, inheritance primarily refers to objects inheriting 
// properties and methods from other objects. The core mechanism behind this is 
// prototypal inheritance. JavaScript does not have "classes" in the traditional 
// sense like languages such as Java or C++, at least until ES6, but even then, the 
// class syntax is syntactic sugar over JavaScript’s existing prototypal inheritance.

// Here are the main types of inheritance in JavaScript:



//****1. Prototypal Inheritance (Prototype-based Inheritance) */

// This is the most direct form of inheritance in JavaScript, where an object 
// directly inherits from another object. This is achieved using the prototype property.

// Prototype Chain: Every object has a property called prototype where you can add 
// methods and properties that you want to be inherited.

// Object.create: The modern way to create an object that inherits from another 
// object is Object.create(). This method directly sets the object to inherit from 
// the passed prototype object.


const parent = {
    name: 'Parent',
    sayName: function() {
      console.log(this.name);
    }
  };
  
  const child = Object.create(parent);
  child.name = 'Child';
  child.sayName();  // Outputs: "Child"


  