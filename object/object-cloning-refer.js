//SPECIAL CASE 

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }



//Comparison by reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//_----------------

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false



//Cloning and merging, Object.assign

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
  
  alert( user.name ); // still John in the original object


//IF we have age in both the object the updates will happen for the age after cloning 




// It copies the properties of all source objects into the target dest, and then returns it as the result.

// For example, we have user object, let’s add a couple of permissions to it:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true



//Nested cloning

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  alert( user.sizes.height ); // 182

//Now it’s not enough to copy clone.sizes = user.sizes,
// because user.sizes is an object, and will be copied by reference, 
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
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 60, get the result from the other one


//To fix that and make user and clone truly separate objects, 
//we should use a cloning loop that examines each value of user[key] 
//and, if it’s an object, then replicate its structure as well. 
//That is called a “deep cloning” or “structured cloning”. 
//There’s structuredClone method that implements deep cloning.

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
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related

//STRUCTURED CLONING IS DEEP CLONING (COPY BY VALUE)SO OTHER ONE IS SHALLOW CLONING (COPY BY REFERENCE)
//IN STRUCTURED CLONING RUNS ON FOR LOOP ITS CHECK EACH KEY  VALUE PAIR IS AN OBJECT OR NOT .ON THIS BASIC IT WORKS
//IF IT IS AN OBJECT INSIDE OBJECT IT WILL COPY BY VALUE RATHER 




//To make a “real copy” (a clone) we can use Object.assign for the so-called 
//“shallow copy” (nested objects are copied by reference) or a “deep cloning” 
//function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).

