//Class checking: "instanceof"


// The instanceof operator allows to check whether an object belongs to a certain class. 
// It also takes inheritance into account.

// Such a check may be necessary in many cases. For example, it can be used for building a 
// polymorphic function, the one that treats arguments differently depending on their type.




The syntax is:

obj instanceof Class


class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true



// instead of class
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true



let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true



// Please note that arr also belongs to the Object class. That’s because Array 
// prototypically inherits from Object.

// Normally, instanceof examines the prototype chain for the check. We can also set a 
// custom logic in the static method Symbol.hasInstance.




// The algorithm of obj instanceof Class works roughly as follows:

// If there’s a static method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj). 
// It should return either true or false, and we’re done. That’s how we can customize the behavior of 
// instanceof.

// For example:

// setup instanceOf check that assumes that
// anything with canEat property is an animal
class Animal {
    static [Symbol.hasInstance](obj) {
      if (obj.canEat) return true;
    }
  }
  
  let obj = { canEat: true };
  
  alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called


