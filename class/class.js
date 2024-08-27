//Class basic syntax

class MyClass {
    // class methods
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }


//The constructor() method is called automatically by new, so we can initialize the object there.

//For example:

class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  user.sayHi();



//What is a class?

//In JavaScript, a class is a kind of function

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // proof: User is a function
  alert(typeof User); // function


//What class User {...} construct really does is:

//Creates a function named User, that becomes the result of the class declaration. 
//The function code is taken from the constructor method (assumed empty if we don’t write such method).
//Stores class methods, such as sayHi, in User.prototype.


class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // class is a function
  alert(typeof User); // function
  
  // ...or, more precisely, the constructor method
  alert(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  alert(User.prototype.sayHi); // the code of the sayHi method
  
  // there are exactly two methods in the prototype
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi




//Not just a syntactic sugar

// Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make 
// things easier to read, but doesn’t introduce anything new), because we could actually 
// declare the same thing without using the class keyword at all:


// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
    this.name = name;
  }
  // a function prototype has "constructor" property by default,
  // so we don't need to create it
  
  // 2. Add the method to prototype
  User.prototype.sayHi = function() {
    alert(this.name);
  };
  
  // Usage:
  let user = new User("John");
  user.sayHi();



//Still, there are important differences.

// 1)First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. 
// So it’s not entirely the same as creating it manually.

// The language checks for that property in a variety of places. For example, unlike a regular function, 
// it must be called with new:

class User {
    constructor() {}
  }
  
  alert(typeof User); // function
  User(); // Error: Class constructor User cannot be invoked without 'new



// Also, a string representation of a class constructor in most JavaScript engines starts with the “class…”


//2)Class methods are non-enumerable. A class definition sets enumerable flag to false for all 
//methods in the "prototype".

//That’s good, because if we for..in over an object, we usually don’t want its class methods.

//3)Classes always use strict. All code inside the class construct is automatically in strict mode.





//class expression


// Just like functions, classes can be defined inside another expression, 
// passed around, returned, assigned, etc.

let User = class {
    sayHi() {
      alert("Hello");
    }
  };



// Similar to Named Function Expressions, class expressions may have a name.

// If a class expression has a name, it’s visible inside the class only:


// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)

let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass name is visible only inside the class
    }
  };
  
new User().sayHi(); // works, shows MyClass definition



//We can even make classes dynamically “on-demand”, like this:


function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        }
    };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello






//Getters/setters //*****GETTER AND SETTER VVIMP */

// Just like literal objects, classes may include getters/setters, computed properties etc.

// Here’s an example for user.name implemented using get/set:



class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.

  
alert(MyClass); // error, MyClass name isn't visible outside of the class



//Computed names […]

// Here’s an example with a computed method name using brackets [...]:

class User {

    ['say' + 'Hi']() {
      alert("Hello");
    }
  
  }
  
  new User().sayHi();



//Class fields

// “Class fields” is a syntax that allows to add any properties.

// For instance, let’s add name property to class User:


class User {
    name = "John";

    sayHi() {
        alert(`Hello, ${this.name}!`);
    }
}

new User().sayHi(); // Hello, John!



// So, we just write " = " in the declaration, and that’s it.

// The important difference of class fields is that they are set on individual objects, not User.prototype:
  


class User {
    name = "John";
  }
  
  let user = new User();
  alert(user.name); // John
  alert(User.prototype.name); // undefined



//We can also assign values using more complex expressions and function calls:


class User {
    name = prompt("Name, please?", "John");
  }
  
  let user = new User();
  alert(user.name); // John





//   As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. 
//   It depends on the context of the call.

//   So if an object method is passed around and called in another context, 
//   this won’t be a reference to its object any more.




// The problem is called "losing this".

// There are two approaches to fixing it, as discussed in the chapter Function binding:

// 1.Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
// 2.Bind the method to object, e.g. in the constructor.





class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // undefined




  class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // hello




//REASON 



// In the second example, click is defined as an arrow function. 
// Arrow functions do not have their own this context; instead, they 
// lexically inherit this from the surrounding scope, which in this case 
// is the Button class's constructor function. Here, this inside click permanently 
// binds to the Button instance (button) at the time of its creation. When button.click 
// is passed to setTimeout, the this.value correctly refers to the button instance's value 
// property because the lexical binding of this is retained, and the alert correctly displays "hello".




