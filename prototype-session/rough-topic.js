//output based

console.log(3 && -3);//-3

console.log(3 || -3);//3

console.log(3 && undefined)//undefined

console.log(undefined && -3);//undefined

console.log(undefined ?? -9);//-9 //first defined value will be printed 

console.log(false ?? 10);//false

console.log(typeof(null));//object



//PROTOTYPE

//Everything in js is an object 

//if you want to decalre anything inside the object 

//prototype --->setter 

//__proto__ -dinso proto - getter 

let ar=[1,2,3,4,5];
console.log(ar.__proto__);
//now the output is all the methods of the array 



//****//at last we can see the prototype -- it is the object inside the each and every variable of the javascript 



//every object contains some prototype ( __proto__ ) ---which is 
//another object and that object prototype is null value 

let obj={};
console.log(obj.__proto__.__proto__);//null

//every string contains prototype which is --__proto__ that is object 
//then that object proto is an object then again that prototype is null


//similarly for array , and every inbuilt data type work like this 


//whenever we use any method for a variable 
// for ex : array 

//first it will check whether it is available for array.__proto__(array attribute prototype then object then object then null)
// then it will chekc inside that object whether that method definitions availbale or not 
//suppose not there 

// case for the aboev 

//suppose we need to implement some method called myPush()
//but there is no mypush method there and we need to work like the push 


let ary=[1,2,3];
ary.myPush(4);
console.log(ary);

//inorder to work that method we need to declare that variable inside the prototype or object modularity
//after checking in all the section comes here below


Array.prototype.myPush=function(element){//declared inside the array prototypes
    this.length;//current array length
    this[this.length]=element;
}



let ary=[1,2,3];
ary.myPush(4);
console.log(ary);//[1,2,3,4]


//giving the new function in the object abbrevation or attribute or prototype 
//then it is called the polifills
