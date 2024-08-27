//Inheritance in JavaScript is primarily based on prototypes—a core concept that enables 
//objects to inherit features from one another. JavaScript implements prototype-based 
//inheritance instead of the classical inheritance pattern found in languages like Java 
//or C++. This means that inheritance in JavaScript is achieved through prototypes and 
//prototype chains, rather than classes (although the class syntax introduced in ES6 is 
//syntactic sugar over JavaScript's prototypal inheritance).



//Understanding Prototypes:

//Each JavaScript object has a property called prototype. This is a reference to another 
//object and contains common attributes and methods that should be inherited. When you 
//access a property or a method of an object, JavaScript first looks at its own properties. 
//If it does not find it, then it looks up through the prototype chain. This chain continues 
//until either the property/method is found or null (which has no prototype) is reached.



function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name);
}

// Setting Dog's prototype to be an instance of Animal to inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

// Ensuring the constructor property points back to Dog
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex');
dog.speak(); // Rex barks.




//***2. Constructor Inheritance or  */ //confirm abut this 

//Before ES6, constructor functions were used to simulate class-like behavior. 
//The idea is to define a constructor function and then extend its prototype.


function Parent(name) {
    this.name = name;
  }
  
  Parent.prototype.sayName = function() {
    console.log(this.name);
  };
  
  function Child(name) {
    Parent.call(this, name); // calling Parent constructor function
  }
  
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  
  const child = new Child('Child');
  child.sayName();  // Outputs: "Child"


//3. Class-based Inheritance (ES6 Classes)

//With ES6, JavaScript introduced a class syntax that allows more traditional 
//class-based inheritance. This is syntactic sugar over JavaScript's prototypal 
//inheritance and provides a cleaner and more straightforward syntax.

class Parent {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

class Child extends Parent {
    constructor(name) {
        super(name); // call the parent method with super
    }
}

const child = new Child('Child');
child.sayName();  // Outputs: "Child"




