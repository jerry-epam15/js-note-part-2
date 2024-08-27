//IN JS VARIABLE CAN BE var let const

// var age =20;//globally scope 


//***HOSITING * */
//the process of moving the scope of js decalaration part to the top 
// here the top scope is line 1
//scope is the tope line of the code 

// //internally the js do var age = undefined;
// console.log(age1);//undefined
// var age1 =200;
// console.log(age1);//20

//in js can access the variable before the decalartion 

//function can also be called before the decalaration 
//since js work internally 
// greet();// will call the fuunction 

// function greet(){
//     console.log("hey i am greet ");
// }

// function sh(){
//     console.log(x);//undefined 
//     var x=80;
//     console.log(x);//80
// }

// sh();//insiide the function also hositing can occur

//**DIFFERENCE BETWEEN VAR LET CONST  */

// //console.log(y);//throws error 
// var x=20;
// let y =30;
// const z=50;

// console.log(x,y,z)

//hositing process never work for the let and const
//let and const occurs in the tdz(TEMRORY DEAD ZONE)
//SO cant access beyond the scope 
//tdz above is 36 to 37

//tdz in function 
// function greet(){
//     console.log(name);//error
//     let name = "jerry";
//     console.log(name)//jerry 
// }
// greet();


//**CONST ** */
//used to declare the constant variable 
// const pi=3.14
// console.log(pi);
// pi=24

//above throws the error so const variables values can be changed 

console.log(x())//since the variable is undefined it can't be considered as function 
console.log(x)//undefined 
var x = function(){
    console.log("hilooo")
}

console.log(x);//entire function is displayed 
console.log(x());//hilooo

//above case the hositing occurs for the function  hositing for normal function




