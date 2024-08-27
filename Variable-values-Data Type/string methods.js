                                                //STATIC METHOD 

        //1.String.fromCharCode()

// The String.fromCharCode() static method returns a string created from the specified 
// sequence of UTF-16 code units.

console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="


//example

function convertString(input) {
    // Construct the new string using concatenation
    let result = input.charAt(0); // First character 'J'
    
    // Convert the second character to lowercase 'e'
    const charCodeOfE = input.charCodeAt(1) + 32; // Convert 'E' to 'e'
    result += String.fromCharCode(charCodeOfE);
    
    // Append the rest of the string unchanged
    result += input.charAt(2); // 'R'
    result += input.charAt(3); // 'R'
    result += input.charAt(4); // 'Y'
    
    return result;
}

// Testing the function
const originalString = "JERRY";
const convertedString = convertString(originalString);
console.log(convertedString); // Outputs: JeRRY


        //2.String.fromCodePoint()

// The String.fromCodePoint() static method returns a string created from the specified
// sequence of code points.

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"


        //3.String.raw()

// It's used to get the raw string form of template literals — 
// that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.



// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"



//INSTANCE METHOD 

//1.String.prototype.at()


// The at() method of String values takes an integer value and returns a new String 
// consisting of the single UTF-16 code unit located at the specified offset. 
// This method allows for positive and negative integers. Negative integers count 
// back from the last string character.

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

//2.String.prototype.charAt()

// The charAt() method of String values returns a new string consisting of the single 
// UTF-16 code unit at the given index.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"


        //3.String.prototype.charCodeAt()

// The charCodeAt() method of String values returns an integer between 0 and 65535 
// representing the UTF-16 code unit at the given index.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"


        //4.String.prototype.concat()

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

        //5.String.prototype.endsWith()

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false


        //6.String.prototype.includes()

includes(searchString)
includes(searchString, position)


const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"


        //7.String.prototype.indexOf()

// The indexOf() method of String values searches this string and returns 
// the index of the first occurrence of the specified substring

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"


        //8.String.prototype.lastIndexOf()

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index of the last "dog" is 38"


        //9.String.prototype.localeCompare()

// The localeCompare() method of String values returns a number indicating whether 
// this string comes before, or after, or is the same as the given string in sort order. 

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0


        //10.String.prototype.repeat()

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


        //11.String.prototype.replace()
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"


        //12.String.prototype.replaceAll()

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"



//13.String.prototype.search()

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"


//14.String.prototype.slice()

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"


        //15.String.prototype.split()

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

        //16.String.prototype.startsWith()

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false

        //17.String.prototype.substr()

const str = 'Mozilla';

console.log(str.substr(1, 2));
// Expected output: "oz"

console.log(str.substr(2));
// Expected output: "zilla"


        //18.String.prototype.substring()

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

//19.String.prototype.toLowerCase()

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."


          //20.String.prototype.toString()



const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"



          //21.String.prototype.toUpperCase()



const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."



          //22.String.prototype.trim()




// The trim() method of String values removes 
// whitespace from both ends of this string and returns a new string,
//  without modifying the original string.

 const greeting = '   Hello world!   ';

 console.log(greeting);
 // Expected output: "   Hello world!   ";
 
 console.log(greeting.trim());
 // Expected output: "Hello world!";



        //23.String.prototype.trimEnd()



 const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";




        //24.String.prototype.trimStart()



const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";




        //25.String.prototype.valueOf()



//The valueOf() method of String values returns this string value.

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"

