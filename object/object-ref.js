//Object references and copying

//One of the fundamental differences of objects versus primitives is 
//that objects are stored and copied “by reference”, whereas primitive 
//values: strings, numbers, booleans, etc – are always copied “as a whole value”.



//And here’s how it’s actually stored in memory:


//The object is stored somewhere in memory (at the right of the picture),
//while the user variable (at the left) has a “reference” to it.

//We may think of an object variable, such as user, like a sheet of paper 
//with the address of the object on it.

//When we perform actions with the object, e.g. take a property user.name, 
//the JavaScript engine looks at what’s at that address and performs the 
//operation on the actual object.


//------
//**When an object variable is copied, the reference is copied, 
//but the object itself is not duplicated. */
//------

//For instance:

let user = { name: "John" };

let admin = user; // copy the reference

///---------


// As you can see, there’s still one object, but now with two variables that reference it.

// We can use either variable to access the object and modify its contents:

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference


//-----------------


//Comparison by reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//And here two independent objects are not equal, even though they look alike (both are empty):

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

//**An important side effect of storing objects as references is 
//that an object declared as const can be modified.

//For instance:

const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete



//Cloning and merging, Object.assign



//We can create a new object and replicate the structure of the existing one,
//by iterating over its properties and copying them on the primitive level.

//Like this:

let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object


//copies the all the from the 2 objects to one object 
//copies the properties of all source objects into the target dest, and 
//then returns it as the result.

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true



//If the copied property name already exists, it gets overwritten:

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }



//We also can use Object.assign to perform a simple object cloning:

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30



//Nested cloning

// But properties can be references to other objects.

// Like this:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182




//Now it’s not enough to copy clone.sizes = user.sizes, 
//because user.sizes is an object, and will be copied by reference, 
//so clone and user will share the same sizes:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place<<===
alert(clone.sizes.width); // 60, get the result from the other one


//structuredcloning : make the the copied and original truely seperated 
// To fix that and make user and clone truly separate objects, we should use a 
// cloning loop that examines each value of user[key] and, if it’s an object, 
// then replicate its structure as well. That is called a “deep cloning” or “structured cloning”.


//The call structuredClone(object) clones the object with all nested properties.

//Here’s how we can use it in our example:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place//<<===
alert(clone.sizes.width); // 50, not related



