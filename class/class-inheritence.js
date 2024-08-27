//Class inheritance

//Class inheritance is a way for one class to extend another class.

//The “extends” keyword

//Let’s say we have class Animal:


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");



// As rabbits are animals, Rabbit class should be based on Animal, have access to animal methods, 
// so that rabbits can do what “generic” animals can do.

// The syntax to extend another class is: class Child extends Parent.


class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!




//Object of Rabbit class have access both to Rabbit methods, such as rabbit.hide(), 
//and also to Animal methods, such as rabbit.run().

//Internally, extends keyword works using the good old prototype mechanics. 
//It sets Rabbit.prototype.[[Prototype]] to Animal.prototype. So, if a method is not 
//found in Rabbit.prototype, JavaScript takes it from Animal.prototype.



//Overriding a method

// Now let’s move forward and override a method. By default, all methods that are not specified 
// in class Rabbit are taken directly “as is” from class Animal.

// But if we specify our own method in Rabbit, such as stop() then it will be used instead:



class Rabbit extends Animal {
    stop() {
        // ...now this will be used for rabbit.stop()
        // instead of stop() from class Animal
    }
}



// Usually, however, we don’t want to totally replace a parent method, but rather to build on 
// top of it to tweak or extend its functionality. We do something in our method, 
// but call the parent method before/after it or in the process.

// Classes provide "super" keyword for that.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).


class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!




//Arrow functions have no super


// If accessed, it’s taken from the outer function. For instance:

class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
  }
}
// The super in the arrow function is the same as in stop(), so it works as intended. 
// If we specified a “regular” function here, there would be an error:

// Unexpected super
setTimeout(function() { super.stop() }, 1000);






//Overriding constructor

// Until now, Rabbit did not have its own constructor.

// According to the specification, if a class extends another class and has no constructor, 
// then the following “empty” constructor is generated:


class Rabbit extends Animal {
    // generated for extending classes without own constructors
    constructor(...args) {
      super(...args);
    }
  }

//   As we can see, it basically calls the parent constructor passing it all the arguments. 
//That happens if we don’t write a constructor of our own.

//   Now let’s add a custom constructor to Rabbit. It will specify the earLength in addition to name:


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}

class Rabbit extends Animal {

    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }

    // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.


//  We’ve got an error. Now we can’t create rabbits. What went wrong?

// The short answer is:

// Constructors in inheriting classes must call super(...), and (!) do it before using this.


// In JavaScript, there’s a distinction between a constructor function of an inheriting class 
//(so-called “derived constructor”) and other functions. A derived constructor has a special 
//internal property [[ConstructorKind]]:"derived". That’s a special internal label.

// That label affects its behavior with new.

// When a regular function is executed with new, it creates an empty object and assigns it to this.

// But when a derived constructor runs, it doesn’t do this. It expects the parent constructor 
// to do this job.

// So a derived constructor must call super in order to execute its parent (base) constructor, 
// otherwise the object for this won’t be created. And we’ll get an error.



//For the Rabbit constructor to work, it needs to call super() before using this, like here


class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    // ...
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
    // ...
  }
  
  // now fine
  let rabbit = new Rabbit("White Rabbit", 10);
  alert(rabbit.name); // White Rabbit
  alert(rabbit.earLength); // 10






//Super: internals, [[HomeObject]]

// it’s impossible for super to work at all!

// When an object method runs, it gets the current object as this. If we call super.method() then, 
// the engine needs to get the method from the prototype of the current object. 


// The engine knows the current object this, so it could get the parent method as this.__proto__.method. 
// Unfortunately, such a “naive” solution won’t work.

// In the example below, rabbit.__proto__ = animal. Now let’s try: in rabbit.eat() we’ll call 
// animal.eat(), using this.__proto__:


let animal = {
    name: "Animal",
    eat() {
      alert(`${this.name} eats.`);
    }
  };
  
  let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {
      // that's how super.eat() could presumably work
      this.__proto__.eat.call(this); // (*)
    }
  };
  
  rabbit.eat(); // Rabbit eats.


//   At the line (*) we take eat from the prototype (animal) and call it in the context of the 
//   current object. Please note that .call(this) is important here, because a simple this.__proto__.eat() 
//   would execute parent eat in the context of the prototype, not the current object.


let animal = {
    name: "Animal",
    eat() {
      alert(`${this.name} eats.`);
    }
  };
  
  let rabbit = {
    __proto__: animal,
    eat() {
      // ...bounce around rabbit-style and call parent (animal) method
      this.__proto__.eat.call(this); // (*)
    }
  };
  
  let longEar = {
    __proto__: rabbit,
    eat() {
      // ...do something with long ears and call parent (rabbit) method
      this.__proto__.eat.call(this); // (**)
    }
  };
  
  longEar.eat(); // Error: Maximum call stack size exceeded


[[HomeObject]]

// To provide the solution, JavaScript adds one more special internal property for functions: 
// [[HomeObject]].
  
// When a function is specified as a class or object method, its [[HomeObject]] property 
// becomes that object.
  
// Then super uses it to resolve the parent prototype and its methods.
  
// Let’s see how it works, first with plain objects:


  let animal = {
    name: "Animal",
    eat() {         // animal.eat.[[HomeObject]] == animal
      alert(`${this.name} eats.`);
    }
  };
  
  let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
      super.eat();
    }
  };
  
  let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() {         // longEar.eat.[[HomeObject]] == longEar
      super.eat();
    }
  };
  
  // works correctly
  longEar.eat();  // Long Ear eats.



  
