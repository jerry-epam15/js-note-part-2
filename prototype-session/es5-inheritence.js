//inheritence is the property through which we acquire the data and property from the parent class 

function Person(){
    this.name="test1"
    this.age=20
}

let p1 = new Person();
console.log(p1);
//here the person constructor function here itself

function Employee(){
    this.company="epam";
    this.sal=20000;
}

let e1 = new Employee();
console.log(e1);

//currently the person and employee is independent objects

//now we have to get the employee object should contain the data of the person



function Person(){
    this.name="test1"
    this.age=20
}

let p1 = new Person();
console.log(p1);
//here the person constructor function here itself

function Employee(){
    Person.call(this)//passing the instance that need to be called through the call function 
    //{}-- this // here the this points to the empty object 
    this.company="epam";
    this.sal=20000;
}

let e1 = new Employee();
console.log(e1);

//now we have the entire property of the both objects 


//case 

function Person(){
    this.name="test1"
    this.age=20
}
Person.prototype.sayhi = function(){
    console.log("saying hiii");
}

let p1 = new Person();
console.log(p1);
//here the person constructor function here itself

function Employee(){
    Person.call(this)//passing the instance that need to be called through the call function 
    //{}-- this // here the this points to the empty object 
    this.company="epam";
    this.sal=20000;
}

let e1 = new Employee();
console.log(e1);

console.log(e1.sayhi);//cant be executed since the prototype of employee prototype 



//LINKING THE PROTOTYPE OF EACH OTHER 

// PROTOTYPAL INHERITENCE 

function Person(){
    this.name="test1"
    this.age=20
}
Person.prototype.sayhi = function(){
    console.log("saying hiii");
}

let p1 = new Person();
console.log(p1);
//here the person constructor function here itself

function Employee(){
    Person.call(this)//passing the instance that need to be called through the call function 
    //{}-- this // here the this points to the empty object 
    this.company="epam";
    this.sal=20000;
}

Employee.prototype=Object.create(Person.prototype);
//whatever properties are present with the person attach that with the employee

let e1 = new Employee();
console.log(e1);

console.log(e1.sayhi);//now it is accessible 

//here the constructor function of the employee is not pointed to the employee
//here pointed to the person




function Person(){
    this.name="test1"
    this.age=20
}
Person.prototype.sayhi = function(){
    console.log("saying hiii");
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

let p1 = new Person();
console.log(p1);
//here the person constructor function here itself

function Employee(){
    Person.call(this)//passing the instance that need to be called through the call function 
    //{}-- this // here the this points to the empty object 
    this.company="epam";
    this.sal=20000;
}

let e1 = new Employee();
console.log(e1);

console.log(e1.sayhi);



Why Reassign the Constructor?
// After Child.prototype = Object.create(Parent.prototype);, the prototype of Child instances is 
// correctly set to Parent.prototype, fulfilling the inheritance requirement. However, 
// this operation overwrites the prototype object of Child, which includes the 
// constructor property referencing the Child function itself.

// At this point, anything you create with new Child() would erroneously report its constructor as Parent:

console.log((new Child()).constructor === Parent);  // True, but not desirable!



// To correct this, it's essential to explicitly reset the constructor property on Child.prototype:


Child.prototype.constructor = Child;

console.log((new Child()).constructor === Child);  // True, as expected

