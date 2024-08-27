//IIFE

// An Immediately Invoked Function Expression (IIFE, pronounced "iffy") is a function in 
// JavaScript that runs as soon as it is defined. It is a design pattern which is also 
// known as a Self-Executing Anonymous Function and contains two major parts. The first is 
// the anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE as well as polluting the global scope.
// The second part creates the immediately invoking function expression () through which the 
// JavaScript engine will directly interpret the function.



//Structure of an IIFE
//An IIFE can be written in a couple of different ways. Here is the most common syntax:


(function() {
    console.log("This is an IIFE!");
})();

//Reasons to Use an IIFE
//1Avoid Polluting the Global Scope: Variables defined inside an IIFE are not visible 
//outside its scope. This helps in avoiding global scope pollution, 
//which is a good practice and prevents variable conflicts.

//2.Immediately Run Configuration Code: IIFEs are often used to bootstrap or 
//initialize applications without leaving any footprint. This is useful in scenarios 
//where some setup needs to run immediately without affecting the global namespace.

//3.Create a Private Scope for Variables: Since JavaScript's function scope works over 
//block scope, using an IIFE is a way to create new variables that other parts of the code 
//can't access directly.


// In the past, as there was only var, and it has no block-level visibility, programmers 
// invented a way to emulate it. What they did was called “immediately-invoked 
// function expressions” (abbreviated as IIFE).

// That’s not something we should use nowadays, but you can find them in old scripts.

// An IIFE looks like this:

(function() {

  var message = "Hello";

  alert(message); // Hello

})();



// Here, a Function Expression is created and immediately called. 
// So the code executes right away and has its own private variables.

// The Function Expression is wrapped with parenthesis (function {...}), 
// because when JavaScript engine encounters "function" in the main code, 
// it understands it as the start of a Function Declaration. 
// But a Function Declaration must have a name, so this kind of code will give an error:

// Tries to declare and immediately call a function
function() { // <-- SyntaxError: Function statements require a function name

  var message = "Hello";

  alert(message); // Hello

}();
// Even if we say: “okay, let’s add a name”, that won’t work, 
// as JavaScript does not allow Function Declarations to be called immediately:


// syntax error because of parentheses below
function go() {

}(); // <-- can't call Function Declaration immediately

// So, the parentheses around the function is a trick to show 
// JavaScript that the function is created in the context of another 
// expression, and hence it’s a Function Expression: it needs no name and can be called immediately.

// There exist other ways besides parentheses to 
// tell JavaScript that we mean a Function Expression:



// Ways to create IIFE

(function() {
    alert("Parentheses around the function");
  })();
  
  (function() {
    alert("Parentheses around the whole thing");
  }());
  
  !function() {
    alert("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    alert("Unary plus starts the expression");
  }();

  






//DYNAMIC SCOPING IN JS 


//CALL APPLY BIND 
//CHANGE THE CONTEXT OF FUNCTION WITHOUT CALLING MULTIPLE TIMES 
//CALL USED TO EXECUTE FUNCTION 
//APPLY DIRECTLY EXECUTED BOTH 
//BIND WORKS IN FIRST TAKE THE REFERENCE IN VARIABLE THEN THAT IS EXECUTED 




let user1={
    name:"test1",
    age:20
}

let user2 = {
    name:"test2",
    age:50
}

let user3 = {
    name:"test3",
    age:70
}


function showData(msg){
    console.log(this,msg)
}

showData("hiii");

showData.call(user1,"good morning");//
showData.apply(user2,["good evening"]);//

let fn = showData.bind(user3);

fn("good night");//

let user = {
    id:101,
    show:function(){
        console.log(this)
    }
}

let fn = user.show;
fn();



function greet(){
    console.log("hii")
}

greet();

greet.call()
greet.apply();

// 
let fn = greet.bind();

fn();
