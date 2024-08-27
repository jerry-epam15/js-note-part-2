//F.prototype
//If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

//Please note that F.prototype here means a regular property named "prototype" on F. 
//It sounds something similar to the term “prototype”, but here we really mean a 
//regular property with this name.


let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  alert( rabbit.eats ); // true

//Setting Rabbit.prototype = animal literally states the following: 
//"When a new Rabbit is created, assign its [[Prototype]] to animal".

//That’s the resulting picture:

