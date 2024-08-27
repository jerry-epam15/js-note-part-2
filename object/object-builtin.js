// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)


                    //1.assign()


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//static method copies all enumerable own properties from one or more source objects to 
//a target object. It returns the modified target object.


                    //2.create()

//static method creates a new object, using an existing object as the prototype of the newly created object.                    

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
                      

                    //3.Object.defineProperties()


const book = {};

// Use Object.defineProperties to set multiple properties
Object.defineProperties(book, {
    // Data property that holds a value
    title: {
        value: "JavaScript: The Definitive Guide",
        writable: true,    // This property can be changed
        configurable: true, // This property can be redefined or deleted
        enumerable: true   // This property will show up during enumeration (e.g., in a for...in loop)
    },
    author: {
        value: "David Flanagan",
        writable: false,   // This property cannot be changed
        configurable: true,
        enumerable: true
    }
});

console.log(book.title);  // "JavaScript: The Definitive Guide"
console.log(book.author); // "David Flanagan"

//static methoddefines new or modifies existing properties directly on an object, returning the object.
//defining the property of the each keys values how it need to be and all 

//CHECK THE SAMEER VIDEO 


                    //4.Object.defineProperty()


const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42

//static method defines a new property directly on an object, or modifies an existing property on an object, 
//and returns the object.

//PROPERTIES VS PROPERTY 

// Object.defineProperty() is used to define a single property on an object or modify attributes of a 
// single existing property such as its value, writable attribute, enumerable attribute, configurable 
// attribute, or getters and setters for the property.

//Object.defineProperties(), on the other hand, allows you to define multiple properties on an 
//object at once, or modify attributes of multiple existing properties. This can be more efficient 
//and concise when setting up several properties together, maintaining code readability and reducing 
//redundancy.


                    //5.Object.entries()

//staticreturns an array of a given object's own enumerable string-keyed property key-value pairs.
//
const object1 = {
    a: 'somestring',
    b: 42,
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // Expected output:
  // "a: somestring"
  // "b: 42"





                    //6.Object.freeze()


const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // Expected output: 42

//Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
// A frozen object can no longer be changed: new properties cannot be added, existing properties 
//cannot be removed, their enumerability, configurability, writability, or value cannot be changed, 
//and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.



                    //7.Object.fromEntries()

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
  ]);
  
  const obj = Object.fromEntries(entries);
  
  console.log(obj);
  // Expected output: Object { foo: "bar", baz: 42 }

  
//static method transforms a list of key-value pairs into an object.


                    //8.Object.getOwnPropertyDescriptor()



const object1 = {
    property1: 42,
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
  console.log(descriptor1);//> Object { value: 42, writable: true, enumerable: true, configurable: true }
  console.log(descriptor1.configurable);
  // Expected output: true
  
  console.log(descriptor1.value);
  // Expected output: 42



//The Object.getOwnPropertyDescriptor() static method returns an object describing 
//the configuration of a specific property on a given object (that is, one directly 
//present on an object and not in the object's prototype chain). The object returned is 
//mutable but mutating it has no effect on the original property's configuration.



                    //9.Object.getOwnPropertyDescriptors()

const object1 = {
    property1: 42,
  };
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);//Object { property1: Object { value: 42, writable: true, enumerable: true, configurable: true } }
  
  console.log(descriptors1.property1.writable);
  // Expected output: true
  
  console.log(descriptors1.property1.value);
  // Expected output: 42


//static method returns all own property descriptors of a given object.

//discriptors vs discriptor 

// Object.getOwnPropertyDescriptors() was introduced in ECMAScript 2017 and provides a way to obtain 
// the descriptors for all own properties (i.e., properties directly present, not inherited) of an object.
// This method is particularly useful for creating an exact copy or clone of an object including its 
// property attributes like getters and setters, which can’t be copied merely by spreading or 
// Object.assign().

const person = {
    name: 'Alice',
    age: 25,
    get details() {
      return `${this.name}, ${this.age} years old`;
    }
  };
  
  const descriptors = Object.getOwnPropertyDescriptors(person);
  console.log(descriptors);
  // Output:
  // {
  //   name: {value: 'Alice', writable: true, enumerable: true, configurable: true},
  //   age: {value: 25, writable: true, enumerable: true, configurable: true},
  //   details: {get: [Function: get details], set: undefined, enumerable: true, configurable: true}
  // }


//Object.getOwnPropertyDescriptor() is used to obtain the descriptor for a single, 
// specific property on an object. A property descriptor is an object that describes 
// the configuration of a property on an object, including attributes such as value, 
// writability, enumerability, configurability, and the getter/setter functions if they are defined.

const person = {
    name: 'Alice',
    age: 25
  };
  
  const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
  console.log(descriptor);
  // Output:
  // {
  //   value: 'Alice',
  //   writable: true,
  //   enumerable: true,
  //   configurable: true
  // }



                    //10.Object.getOwnPropertyNames()


const object1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  console.log(Object.getOwnPropertyNames(object1));
  // Expected output: Array ["a", "b", "c"]


//static method returns an array of all properties (including non-enumerable properties 
//except for those which use Symbol) found directly in a given object.
  
                    //11.Object.getOwnPropertySymbols


const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols);
console.log(objectSymbols.length);
// Expected output: 2


//static method returns an array of all symbol properties found directly upon a given object.



//12.Object.getPrototypeOf()


const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1))// Object {  }

console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true


//static method returns the prototype (i.e. the value of the internal [[Prototype]] property) 
//of the specified object.


//the prototype of an object is a fundamental concept tied to the language's prototype-based 
//inheritance mechanism. Every object in JavaScript has an internal and hidden property known 
//as [[Prototype]], which can be referred to as the object's prototype.

                    //13.Object.groupby()

// static method groups the elements of a given iterable according to the string values returned 
// by a provided callback function. The returned object has separate properties for each group, 
// containing arrays with the elements in the group.

Object.groupBy(items, callbackFn)

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];


  const result = Object.groupBy(inventory, ({ type }) => type);

  /* Result is:
  {
    vegetables: [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
    ],
    fruit: [
      { name: "bananas", type: "fruit", quantity: 0 },
      { name: "cherries", type: "fruit", quantity: 5 }
    ],
    meat: [
      { name: "goat", type: "meat", quantity: 23 },
      { name: "fish", type: "meat", quantity: 22 }
    ]
  }
  */

                        //14.Object.hasOwn()

//static method returns true if the specified object has the indicated property as its own property. 
//If the property is inherited, or does not exist, the method returns false.


const object1 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object1, 'prop'));
  // Expected output: true
  
  console.log(Object.hasOwn(object1, 'toString'));
  // Expected output: false
  
  console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
  // Expected output: false


                        //15.Object.is()


const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

//static method determines whether two values are the same value.


Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true


                    //16.Object.isExtensible()

//static method determines if an object is extensible (whether it can have new properties added to it).

const object1 = {};

console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// Expected output: false



                    //17.Object.isFrozen()

//static method determines if an object is frozen.


const object1 = {
    property1: 42,
  };
  
  console.log(Object.isFrozen(object1));
  // Expected output: false
  
  Object.freeze(object1);
  
  console.log(Object.isFrozen(object1));
  // Expected output: true


                    //18.Object.seal()

//static method seals an object. Sealing an object prevents extensions and makes existing
//properties non-configurable. A sealed object has a fixed set of properties: new properties 
//cannot be added, existing properties cannot be removed, their enumerability and configurability 
//cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can 
//still be changed as long as they are writable. seal() returns the same object that was passed in.


const object1 = {
    property1: 42,
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // Expected output: 33
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1);
  // Expected output: 33

  
                    //19.Object.isSealed()

//static method determines if an object is sealed.


const object1 = {
    property1: 42,
  };
  
  console.log(Object.isSealed(object1));
  // Expected output: false
  
  Object.seal(object1);
  
  console.log(Object.isSealed(object1));
  // Expected output: true

        //20.Object.keys()

//static method returns an array of a given object's own enumerable string-keyed property names.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]

//21.Object.preventExtensions()

//static method prevents new properties from ever being added to an object 
//(i.e. prevents future extensions to the object). It also prevents the object's prototype 
//from being re-assigned.

const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}

//22.Object.setPrototypeOf()

//static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

const obj = {};
const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"


//23.Object.values()

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]






//CONFIGURABLE ,ENUMERABLE , WRITABLE

// In JavaScript, when dealing with properties of objects, you often encounter property descriptors. 
// These descriptors provide detailed control over how a property behaves. Two key attributes of these 
// descriptors are enumerable and configurable, which can also be applied to properties in the object's
//  prototype. Understanding these attributes is essential for effective JavaScript programming, 
//  particularly when creating more complex, flexible objects that interact with various 
//  property-manipulating methods.


//1.WRITABLE
// The writable attribute of a property descriptor determines whether the value of 
// the property can be changed. This attribute is relevant for data properties
//  (i.e., properties that hold values).
//based on the true or false values 

const obj = {};
Object.defineProperty(obj, 'readonly', {
  value: 1,
  writable: false,    // this property cannot be changed
  configurable: true,
  enumerable: true
});

obj.readonly = 2; // Fails silently in non-strict, throws in strict mode
console.log(obj.readonly); // 1

//2.CONFIGURABLE

// The configurable attribute indicates whether the property can be removed from the object and 
// whether its attributes (except for writable) can be changed.

const obj = {};
Object.defineProperty(obj, 'fixed', {
  value: 'initial',
  configurable: false
});

delete obj.fixed; // Fails to delete 'fixed'
console.log(obj.fixed); // 'initial'

// Trying to redefine will throw an error if in strict mode
Object.defineProperty(obj, 'fixed', {
  enumerable: true
}); // TypeError: Cannot redefine property


//3.ENUMERABLE 

// The enumerable attribute defines whether the property is included in enumerations 
// of the object's properties. This affects the behavior of loops like for...in and 
// functions such as Object.keys().


const obj = {};
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false
});

for (let key in obj) {
  console.log(key); // 'hidden' won't log
}

console.log(Object.keys(obj)); // ['hidden'] won't appear in the keys list







