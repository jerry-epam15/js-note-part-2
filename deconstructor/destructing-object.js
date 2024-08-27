//Object destructuring

// The destructuring assignment also works with objects.

// The basic syntax is:

let {var1, var2} = {var1:…, var2:…}


//********************* */

//We should have an existing object on the right side, that we want to split into variables. 
//The left side contains an object-like “pattern” for corresponding properties. In the simplest 
//case, that’s a list of variable names in {...}.


let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200



// If we want to assign a property to a variable with another name, for instance, 
// make options.width go into the variable named w, then we can set the variable name using a colon:

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200


// The colon shows “what : goes where”. In the example above the property width goes to w, 
// property height goes to h, and title is assigned to the same name.

// For potentially missing properties we can set default values using "=", like this:

let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200


// Just like with arrays or function parameters, default values can be any 
// expressions or even function calls. They will be evaluated if the value is not provided.

// In the code below prompt asks for width, but not for title:

let options = {
  title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title);  // Menu
alert(width);  // (whatever the result of prompt is)


//We also can combine both the colon and equality:

let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200




//If we have a complex object with many properties, we can extract only what we need:

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// only extract title as a variable
let { title } = options;

alert(title); // Menu





//The rest pattern “…”


// We can use the rest pattern, just like we did with arrays. 
// It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.

//It looks like this:

let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100




// Gotcha if there’s no let
// In the examples above variables were declared right in the assignment: 
// let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

//This won’t work:

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};


//The problem is that JavaScript treats {...} in the main code flow (not inside another expression) 
//as a code block. Such code blocks can be used to group statements, like this:

{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}
//So here JavaScript assumes that we have a code block, that’s why there’s an error. 
//We want destructuring instead.


//To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu





//NESTED DESTRUCTING 


// If an object or an array contains other nested objects and arrays, 
// we can use more complex left-side patterns to extract deeper portions.

// In the code below options has another object in the property size and 
// an array in the property items. The pattern on the left side of the 
// assignment has the same structure to extract values from them:

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut




//Smart function parameters


// In real-life, the problem is how to remember the order of arguments. 
// Usually, IDEs try to help us, especially if the code is well-documented, 
// but still… Another problem is how to call a function when most parameters are ok by default.



// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])



//We can pass parameters as an object, and the function immediately 
//destructurizes them into variables:

// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);



//We can also use more complex destructuring with nested objects and colon mappings:

let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);




