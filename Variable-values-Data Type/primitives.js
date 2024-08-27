//PRIMITIVES 
//There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.



// An object

// Is capable of storing multiple values as properties.
// Can be created with {}, for instance: {name: "John", age: 30}. 
// There are other kinds of objects in JavaScript: functions, for example, are objects.


let john = {
    name: "John",
    sayHi: function () {
        alert("Hi buddy!");
    }
};

john.sayHi(); // Hi buddy!



//NUMBERS 

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)


1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000



//Hex, binary and octal numbers

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

//toString(base)

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

//ROUNDING 

let num = 12.34;
alert( num.toFixed(1) ); // "12.3"


//Tests: isFinite and isNaN

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true//checking whether it is number 

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity



alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1


//NAN

//TYPEOF NAN //NUMBER 
console.log(1*"a");//NAN
console.log(2+2+2+"abheek"+2);//NAN

//typeof null //object 
//typeof undefined //undefined 



//Symbols

let id = Symbol();

//Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:

// id is a symbol with the description "id"
let id = Symbol("id");


let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

//Symbol.keyFor
//We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):

For instance:

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id



