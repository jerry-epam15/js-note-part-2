//BASICS
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;


//STRING PRINT WITH CALCULATIONS

function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

//NEWLINE EXPRESSION 

  let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

  // two lines using a normal newline and backticks
  let str2 = `Hello
  World`;
  
  alert(str1 == str2); // true


//CHARACTER ASSIGNING 

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

//UPPERCASE AND LOWERCASE 

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'




//***SLICING  */
let str = 'HELLO';

str = 'h' + str.slice(1); // replace the string

alert( str.length); // hELLO


//CHANGING THE IN BETWEEN
let str = 'HELLO';

str = str.slice(0, 2) + str[2].toLowerCase() + str.slice(3);

alert( str ); // HElLO


//SEARCHING OF THE SUBSTRING 

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)


//For instance, the first occurrence of "id" is at position 1.
// To look for the next occurrence, let’s start the search from position 2:

let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12


//OCCURENCE FINDING 

If we’re interested in all occurrences, we can run indexOf in a loop. Every new call is made with the position after the previous match:

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

//OCCURENCE FINDING METHOD TWO 

let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}




// STARTWITH ENDWITH INCLUDES 


alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
The optional second argument of str.includes is the position to start searching from:

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
The methods str.startsWith and str.endsWith do exactly what they say:

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

//***SUBSTRING 


let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

//If there is no second argument, then slice goes till the end of the string:

let str = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

//Negative values for start/end are also possible. They mean the position is counted from the string end:

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'


//** EXCEPTIONAL CASE OF SUBSTRING AND SLICE  */

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)

//***SUBSTR


//In contrast with the previous methods, this one allows us to specify the length instead of the ending position:

let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

//The first argument may be negative, to count from the end:

let str = "stringify";
alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters


