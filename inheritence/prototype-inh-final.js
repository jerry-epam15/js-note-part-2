//Prototype methods, objects without __proto__

// Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat 
// deprecated (moved to the so-called “Annex B” of the JavaScript standard, meant for browsers only).


//The modern methods to get/set a prototype are:

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.


// Object.create(proto[, descriptors]) – creates an empty object with given proto as 
// [[Prototype]] and optional property descriptors.


let animal = {
    eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal); // same as {__proto__: animal}

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}



//The Object.create method is a bit more powerful, as it has an optional second argument: property descriptors.


let animal = {
    eats: true
  };
  
  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });
  
  alert(rabbit.jumps); // true


