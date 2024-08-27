//Object methods, "this"


// A function that is a property of an object is called its method.

// So, here we’ve got a method sayHi of the object user.

//Method shorthand

//There exists a shorter syntax for methods in an object literal:

// these objects do the same

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};
//As demonstrated, we can omit "function" and just write sayHi().


//“this” in methods

// To access the object, a method can use the this keyword.

// The value of this is the object “before dot”, the one used to call the method.

// For instance:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John




// But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

// That’s demonstrated below:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
// If we used this.name instead of user.name inside the alert, then the code would work.


//“this” is not bound

//In JavaScript, keyword this behaves unlike most other programming 
//languages. It can be used in any function, even if it’s not a method of an object.

//There’s no syntax error in the following example:

function sayHi() {
  alert( this.name );
}

//The value of this is evaluated during the run-time, 
//depending on the context.

//For instance, here the same function is assigned to two 
//different objects and has different “this” in the calls:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


// Arrow functions have no “this” reason also study 



//Arrow functions are special: they don’t have their “own” this.
//If we reference this from such a function, it’s taken from the outer “normal” function.

//For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

