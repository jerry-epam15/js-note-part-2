//object creation in js 

//1>using the object literal

let user ={
    name : 'test1',
    age:20
}

//2>object constructor function

let user2= new Object();

user2.name="test2";
user2.age=60;

console.log(user2);


//3using the construction function 

function Employee(name,age,email){
    this.name=name;
    this.email=email;
    this.age=age;
}

let emp1=new Employee("jerry",20,"jerry@gmail.com");


//4th using Object.create()
//create a new object using an existing object as the prototype  of the new created object

//create object from previous object properties


let person={
    name:'person1',
    age:20
}

let p2 = Object.create(person);
console.log(p2);//{}

//expanding the empty obejct created we can see the prototype property 
//inside that we have the property of the previous object
//these properties are copied not directly 
// if we want to create your own property for the p2 we have to initialize for that 

//let p2 = Object.create(person,{email:{value:"person@gmail.com"}});


//prototype is the internal properties of the object 
//prototype are the special property of the object where the all the 
//all the predefined fucntion of the object is present 

//here the newly created object is linekd to prevoius object that is linked to the main 
//obejct as the predefined function of the main objects are there 


//5th method Object.assign()

//constructing the object from multiple object 

let obj={
    x:10
}

let obj2 ={
    y:30
}

let finalobj=Object.assign({},obj1,obj2);
console.log(finalobj);
//contain both x and y 




let obj={
    x:10,
    y:20
}

let obj2 ={
    y:30
}

let finalobj=Object.assign({},obj1,obj2);
console.log(finalobj);

//final will be updated 



//6th way class and obj


class Teacher{
    constructor(){
        this.name="teacher1",
        this.age=20
    }
}

let t1= new Teacher();
console.log(t1);




class Teacher{
    constructor(){
        this.name="teacher1",
        this.age=20
    }
    show(){
        console.log("hi i am show");
    }
}

let t1= new Teacher();
console.log(t1);

//when we print the t1 the show function is not there inside the t1


//when you create a function using the constructor function 
//method will be added inside each  object 



function Teacher(){
    this.name="teacher1";
    this.age=20;

    this.show=function(){
        console.log("i am inside constructor function")
    }
}

let t1 = new Teacher();
console.log(t1);

let t2 = new Teacher()
console.log(t2);

//here  we can see the above method show 



//if we want create a common method that all object can share we have to add that method to the 
// prototype 



function Teacher(){
    this.name="teacher1";
    this.age=20;

    this.show=function(){
        console.log("i am inside constructor function")
    }//part each object 
}

Teacher.prototype.show2=function(){
    console.log("i am show2 inside function")//part of the prototype
}


let t1 = new Teacher();
console.log(t1);

let t2 = new Teacher()
console.log(t2);


//in class the method will be  the part of the prototype 

class Teacher{
    constructor(){
        this.name="teacher1",
        this.age=20
    }
    show(){
        console.log("hi i am show");
    }
}

let t1= new Teacher();
console.log(t1);

//here we can print the 

console.log(t1.name);
console.log(t1.age);
//these are the property of the object 

console.log(t1.show);//since the show is there as the part of the object 





