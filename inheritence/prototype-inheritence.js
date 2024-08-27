//[[Prototype]]

//In JavaScript, objects have a special hidden property [[Prototype]] 
//(as named in the specification), that is either null or references another object. 
//That object is called “a prototype”:


// The property [[Prototype]] is internal and hidden, but there are many ways to set it.

// One of them is to use the special name __proto__, like this:


let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


//Now if we read a property from rabbit, and it’s missing, JavaScript will automatically 
//take it from animal.

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // we can find both properties in rabbit now:
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true


//Then, when alert tries to read property rabbit.eats (**), it’s not in rabbit, 
//so JavaScript follows the [[Prototype]] reference and finds it in animal (look from the bottom up):


//Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

//So if animal has a lot of useful properties and methods, then they become automatically 
//available in rabbit. Such properties are called “inherited”.



//If we have a method in animal, it can be called on rabbit:

let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // walk is taken from the prototype
  rabbit.walk(); // Animal walk



//The prototype chain can be longer:

let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)



//__proto__ is a historical getter/setter for [[Prototype]]

// The prototype is only used for reading properties.

// Write/delete operations work directly with the object.

// Accessor properties are an exception, as assignment is handled by a setter function. 
// So writing to such a property is actually the same as calling a function.

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected



// An interesting question may arise in the example above: what’s the value of this 
// inside set fullName(value)? Where are the properties this.name and this.surname written: 
// into user or admin?

//The answer is simple: this is not affected by prototypes at all.

//No matter where the method is found: in an object or its prototype. 
//In a method call, this is always the object before the dot.

//So, the setter call admin.fullName= uses admin as this, not user.




//That is actually a super-important thing, because we may have a big object with 
//many methods, and have objects that inherit from it. And when the inheriting objects 
//run the inherited methods, they will modify only their own states, not the state of the big object.

// For instance, here animal represents a “method storage”, and rabbit makes use of it.

// The call rabbit.sleep() sets this.isSleeping on the rabbit object:

// animal has methods
let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  alert(rabbit.isSleeping); // true
  alert(animal.isSleeping); // undefined (no such property in the prototype)




//for…in loop

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop); // jumps, then eats



//If that’s not what we want, and we’d like to exclude inherited properties, 
//there’s a built-in method obj.hasOwnProperty(key): it returns true if obj 
//has its own (not inherited) property named key.

let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }



