//Object.prototype

let obj = {};
alert( obj ); // "[object Object]" ?

//But the short notation obj = {} is the same as obj = new Object(), 
//where Object is a built-in object constructor function, with its own 
//prototype referencing a huge object with toString and other methods.


let obj = {};

alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true


//Other built-in prototypes



let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null



//Changing native prototypes

// Native prototypes can be modified. For instance, if we add a method to String.prototype, 
// it becomes available to all strings:

String.prototype.show = function () {
    alert(this);
};

"BOOM!".show(); // BOOM!


// During the process of development, we may have ideas for new built-in methods 
// we’d like to have, and we may be tempted to add them to native prototypes. 
// But that is generally a bad idea.





//In modern programming, there is only one case where modifying native prototypes is approved. 
// That’s polyfilling.


//PLOYFILLS

// Polyfilling is a term for making a substitute for a method that exists in the JavaScript 
// specification, but is not yet supported by a particular JavaScript engine.

if (!String.prototype.repeat) { // if there's no such method
    // add it to the prototype
  
    String.prototype.repeat = function(n) {
      // repeat the string n times
  
      // actually, the code should be a little bit more complex than that
      // (the full algorithm is in the specification)
      // but even an imperfect polyfill is often considered good enough
      return new Array(n + 1).join(this);
    };
  }
  
  alert( "La".repeat(3) ); // LaLaLa




//Borrowing from prototypes

//In JavaScript, method borrowing is a technique where a method from one object is 
//borrowed to be used with another object. This is possible because in JavaScript, 
//functions are first-class objects, meaning that they can be assigned to a variable, 
//passed as an argument, or returned from another function. Additionally,
//the this context in a function is dynamic, which means it depends on how the 
//function is called, not on how it's defined.



// That’s when we take a method from one object and copy it into another.

// Some methods of native prototypes are often borrowed.

// if we’re making an array-like object, we may want to copy some Array methods to it.

let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};

obj.join = Array.prototype.join;

alert(obj.join(',')); // Hello,world!


// It works because the internal algorithm of the built-in join method only cares about the 
// correct indexes and the length property. It doesn’t check if the object is indeed an array. 
// Many built-in methods are like that.

