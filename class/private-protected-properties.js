//Internal and external interface

// In object-oriented programming, properties and methods are split into two groups:

// Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.

// External interface – methods and properties, accessible also from outside the class.


// In JavaScript, there are two types of object fields (properties and methods):

// Public: accessible from anywhere. They comprise the external interface. Until now we were only 
// using public properties and methods.

// Private: accessible only from inside the class. These are for the internal interface.

// “protected” fields: accessible only from inside the class and those extending it 
// (like private, but plus access from inheriting classes). They are also useful for 
// the internal interface.


//Protected fields are not implemented in JavaScript on the language level,




//Protecting “waterAmount”

class CoffeeMachine {
    waterAmount = 0; // the amount of water inside
  
    constructor(power) {
      this.power = power;
      alert( `Created a coffee-machine, power: ${power}` );
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = 200;


// Let’s change waterAmount property to protected to have more control over it. 
// For instance, we don’t want anyone to set it below zero.
//Protected properties are usually prefixed with an underscore _.




class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10




//Read-only “power”


// For power property, let’s make it read-only. It sometimes happens that a property 
// must be set at creation time only, and then never modified.

class CoffeeMachine {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
  
  coffeeMachine.power = 25; // Error (no setter)




//Private “#waterLimit”

// There’s a finished JavaScript proposal, almost in the standard, that provides 
// language-level support for private properties and methods.

// Privates should start with #. They are only accessible from inside the class.

// For instance, here’s a private #waterLimit property and the water-checking private 
// method #fixWaterAmount:


class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
  coffeeMachine.#fixWaterAmount(123); // Error
  coffeeMachine.#waterLimit = 1000; // Error



// On the language level, # is a special sign that the field is private. We can’t access 
// it from outside or from inheriting classes.

// Private fields do not conflict with public ones. We can have both private 
// #waterAmount and public waterAmount fields at the same time.



class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
  alert(machine.#waterAmount); // Error


//   Unlike protected ones, private fields are enforced by the language itself. That’s a good thing.

//   But if we inherit from CoffeeMachine, then we’ll have no direct access to #waterAmount. 
//   We’ll need to rely on waterAmount getter/setter:

