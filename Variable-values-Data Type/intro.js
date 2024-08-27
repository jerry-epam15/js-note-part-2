//based on the session 2 



// JavaScript is a "dynamically typed language", which means that, unlike some other languages, 
// you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc.).


// Dynamic typing in JavaScript refers to the language’s ability to determine variable data types at runtime 
// rather than at compile time. In statically-typed languages like Java or C#, you must declare 
// the type of a variable (such as int, String, or boolean) when you declare it, and 
// the variable's type cannot change. However, JavaScript is a dynamically-typed language,
//  meaning that variables are not bound to any specific data type, and the type can change 
//  as the program executes.



//**SCRIPT IN JS **

// below are the three way of printing the data in web page 
// or the scripts for the writing
//one in console 
// console.log("hello learning js")

//one as in alert 
// alert("hi i am good")

//writing on the page 
// document.write("hi i am learning ")

//** VARIABLE IN JS **

//variables in javascript 
//variables in javascript are losely type language 
//one variable is assigned with the one type can be reassigned 
//by other type 
//create the variable using the var let const
//var creation is global 


// var x =10;
// console.log(x);
// x="jerry"
// console.log(x);

//**DATA TYPE IN JS**/

//even though not mentioning the data type we can check the datatype 
//using the typeof in both ways one function other as normally 

// console.log(typeof x);
// console.log(typeof(x));

//data types in java 
//number, string, boolean , undefined, bigint,null,symbol
// these above data types are primitive data type 


// var isworkdone = true;
// console.log(typeof isworkdonework);
// var name = "jerry";
// console.log(typeof name);
// var roll = undefined;
// console.log(typeof roll);
// var sal=null;
// console.log(typeof sal);

//non primitive data are the data type are non primitive 
//those are array , function , object are the non primitive data type 

// var color=["red","green"];
// console.log(typeof color);//showed this as object 

//object is a varible but we can able to wrap multiple in that block 

// var user={
//     name : "test1",
//     age : 20,
//     adress : "hyd"
// }

// console.log(typeof user)
// console.log(user)
// console.log(user.name)//test1
// console.log(user.length)//undefined
// console.log(typeof user);//object


//except the primitive type data everthing is object in js

//creating the string object it is old functioon 
//string object created 

// var x = new String("abheek");
// console.log(x[0]);//a

// y="jerry"
// var x = new String(y);//jerry

// var b = new Object([10,20,30]);
// console.log(b);

//Autoboxing is a JavaScript feature where primitive data types 
//(numbers, strings, booleans, null, and undefined) are automatically 
//promoted (or "boxed") to objects when necessary.

// DATA TYPE : symbol type data in js 
//used to create unique things  and DOESNT WANT TO INITIALIZE 


// let x = Symbol("hello")
// console.log(typeof x);//symbol
// let y = Symbol("hello")
// console.log(x==y);//false

//false due to the symbols are unique 

//undefined and null also data
//declaring variable without value : UNDEFINED 

// let x;
// console.log(x);//undefined

//null is intentionally creating variable by assigning the null as value 
// let name= null;

//NULL==UNDEFINED //true 
null have value zero but doesnt work for null==0;//false
null<1//true
null>=0//true




//**FUNCTION **/

//FUNCTION IS BLOCK OF CODE TO DO SOME SPECIFIC TASK 

//TYPE 1

// function greet(){
//     console.log("hi")
// }

// greet();

// console.log(typeof greet);//function

//assigning the function to the variable 
//function expression in js 


//TYPE 2

// var greet = function(){
//     console.log("hello")
// }
// greet();//can call the function like this too


// var x = function () {
//     console.log("hello")
// }

// let y=x;

// console.log(y);//only show what stored in x 
//if we want to assess the function we have to 
// console.log(y());//hello below show data type as the undefined 



// implecitily function return as undefined ********

//fat arrow function 

// var greet = ()=>{
//     console.log("hi greet")
// }
// greet();
//is just like the asssigning the function to the varible 

// var greet = ()=>console.log("hi greet")
// greet();
// this make the funnction syntax smaller shorter 




//** OBJECT **/
//Here the multiple object under one variable 

// var emp={
//     name : "test1",
//     age : 30,
//     address : "hyd",
//     salary :20000
// }
// // here we have the key : value pair 
// console.log(emp);//complete log
// console.log(emp.age);//each object propertes 
// console.log(emp.name);

//console.log(emp["name"]);//also give out as test1

//**LOOP* */
//key printing and value printing


// for(var key in emp){
//     console.log(key)
//     console.log(emp[key])
// }

// for(var key in emp){
//     console.log(key,":",emp[key])
// }

//DYNAMIC VALUE CREATION

// var keys=["age","name","roll"]
// var values=[40,"jery",20]

// var obj={}//empty object

// for(var i =0;i<keys.length;i++){
//     obj[keys[i]]=values[i]
// }

// console.log(obj);



//******************** */
//dynamic key in object creation is done

//**syntax to add the dynamic key allocation in object**

// var key ="email"
// var user={
//     [key]:"test@gmail.com"
// }

// console.log(user);//email:'test@gmail.com'
//********************* */


//**ARRAY IN JS AND FUNDAMENTAL OPERATION IN JS*/
//in js collection values of any type 

// var color=[20,"jerry",true,[1,2,3]]
// console.log(color);

// var numbers=[20,30,40,50];
// console.log(numbers.length);//length of the array 

// numbers.push(70)//pushing a number to the end of the array 
// console.log(numbers);

// numbers.pop()//remove an element from end 
// console.log(numbers)

// numbers.unshift(100)//insert the element at the begining 
// console.log(numbers)

// numbers.shift()//remove the element from the begining 
// console.log(numbers)

