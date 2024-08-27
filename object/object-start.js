//In contrast, objects are used to store keyed collections of 
//various data and more complex entities. In JavaScript, objects 
//penetrate almost every aspect of the language.


//A property is a “key: value” pair, where key is a string 
//(also called a “property name”), and value can be anything.


let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

//Literals and properties

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};
//   A property has a key(also known as “name” or “identifier”) before the colon ":" 
//and a value to the right of it.
  
//   In the user object, there are two properties:
  
//   The first property has the name "name" and the value "John".
//   The second one has the name "age" and the value 30.
//   The resulting user object can be imagined as a cabinet 
//   with two signed files labeled “name” and “age”.

//Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30


// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;



//To remove a property, we can use the delete operator:

delete user.age;


//We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};


//The last property in the list may end with a comma:

let user = {
  name: "John",
  age: 30,
}

//Square brackets


//For multiword properties, the dot access doesn’t work:

// this would give a syntax error
user.likes birds = true


//There’s an alternative “square bracket notation” that works with any string:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];



let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;



//Here, the variable key may be calculated at run-time or depend on the user input. 
//And then we use it to access the property. That gives us a great deal of flexibility.

//For instance:

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")



//The dot notation cannot be used in a similar way:

let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined



//-----------


//Computed properties

//We can use square brackets in an object literal, when creating an object. 
//That’s called computed properties.

//For instance:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple


//The meaning of a computed property is simple: [fruit] means 
//that the property name should be taken from fruit.

//So, if a visitor enters "apple", bag will become {apple: 5}.



//Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;


//We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};


//So most of the time, when property names are known and simple, 
//the dot is used. And if we need something more complex, then we switch to square brackets.



//----------

//Property value shorthand



// In real code, we often use existing variables as values for property names.

// For instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
//In the example above, properties have the same names as variables. 
//The use-case of making a property from a variable is so common, 
//that there’s a special property value shorthand to make it shorter.

//Instead of name:name we can just write name, like this:



//Instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
//We can use both normal properties and shorthands in the same object:

let user = {
  name,  // same as name:name
  age: 30
};



//Property names limitations

//As we already know, a variable cannot have a name equal to 
//one of the language-reserved words like “for”, “let”, “return” etc.

//But for an object property, there’s no such restriction:

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6


//For instance, a number 0 becomes a string "0" when used as a property key:

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)


//There’s a minor gotcha with a special property named __proto__. 
//We can’t set it to a non-object value:

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended



//Property existence test, “in” operator


//The syntax is:

"key" in object
//For instance:

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist



//If we omit quotes, that means a variable should contain the 
//actual name to be tested. For instance:

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists


//It’s when an object property exists, but stores undefined:

let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!


//The "for..in" loop

//For instance, let’s output all properties of user:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}



//The “integer property” term here means a string that can be converted 
//to-and-from an integer without a change.

//So, "49" is an integer property name, because when it’s transformed 
//to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not intege


//On the other hand, if the keys are non-integer, 
//then they are listed in the creation order, for instance:


