//Object.keys, values, entries

//For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.


//TRANSFORMING THE OBJECT

// Objects lack many methods that exist for arrays, e.g. map, filter and others.

// If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

// Use Object.entries(obj) to get an array of key/value pairs from obj.
// Use array methods on that array, e.g. map, to transform these key/value pairs.
// Use Object.fromEntries(array) on the resulting array to turn it back into an object.
// For example, we have an object with prices, and would like to double them:


// The map() method is used to transform each entry in the array. 
// It takes a function that specifies how each [key, value] pair (entry) 
// should be transformed. Here, the function:

entry => [entry[0], entry[1] * 2]

// takes each entry (like ["banana", 1]) and returns a new array where the key (entry[0]) 
// remains the same, but the value (entry[1]) is multiplied by 2. The transform results in 
// a new array of modified entries:

[
    ["banana", 2],
    ["orange", 4],
    ["meat", 8],
]

//DOUBT 


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat); // 8




// In the code example you provided, entry refers to an individual element 
// from the array produced by Object.entries(prices). Each entry is itself 
// an array with exactly two elements:

// The first element (entry[0]) is the key from the original prices object (e.g., "banana", "orange", "meat").
// The second element (entry[1]) is the corresponding value associated with that key (e.g., 1, 2, 4).
// So, each entry is indeed an array representing a key-value pair from the original prices object. 
// Here’s a step-by-step recap of how each entry is processed in the code: