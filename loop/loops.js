//Loops: while and for

//WHILE loop

while (condition) {
    // code
    // so-called "loop body"
  }

  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
  }

  //do-while

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);



//FOR LOOP

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}

//break

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

//continue

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
}

//The "switch" statement

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}


//special case

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

//group of case

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}



