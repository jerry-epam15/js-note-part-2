//covering the oops session along with class 

//OOPS

//Class in most OOP programming languages and function in js 
//Allow us to adopt some valuable techniques 
    //-Encapsulation
    //-Inheritance
    //-Polymorphism


//1.objects - building blocks for our applications.
//2.encapsulation - enclosing all the functionalities of an object within that object so that 
//objects intenal workings are hidden from the rest of the 
//applications
//3.inheritence - An object being able to inherit methods and 
//properties from a parent object 
//4.instance- it is a copy of a function or object 


//ex1
function Task() {
}
console.log(window.Task === Task);//true


//ex2
function Task() {
}
let task = new Task();
console.log(typeof task);//object
console.log(task.__proto__ === Task.prototype);//true



//ex3

function Task(id) {
	this.id = id;
}
Task.prototype.showId = function() {
		console.log(this.id);
}

let task1 = new Task(1);
let task2 = new Task(2);
task1.showId();//1
task2.showId();//2


//ex4

function Task(id) {
	this.id = id;
}
Task.prototype.name = ‘processing’;
let task1 = new Task(1);
let task2 = new Task(2);
task1.name;//processing
task2.name;//processing


//ex5

function Task(id) {
	this.id = id;
}
Task.prototype.name = ‘processing’;
let task1 = new Task(1);
let task2 = new Task(2);
task1.name = “processed”;
console.log(task1.name)//processed
console.log(task2.name)//processing


//ex6  IMP

function Task(name) {
	this._totalHrs = 1;
	this.taskName = name
}
Task.osName = "windows";//not adding the variable inside prototype that will not be accessed by the object calling//instace is different//belongs only to function //
Task.sayHello = function(){
    console.log("Hello");
}
let task = new Task("processing");
console.log(task.osName);//undefined
console.log(task.sayHello());//error
console.log(Task.osName);//windows
console.log(Task.sayHello());//hello


//ex7

function Task(name) {
	var _totalHrs = 1;
	this.taskName = name
	Object.defineProperty(this, "totalHrs", {
		get: function() {
			return _totalHrs + 4;
		},
		set: function(newVal) {
			_totalHrs = newVal;
		}
	});
}
let task = new Task("processing");
task.totalHrs = 8;//setter is involved
console.log(task.totalHrs);//12
console.log(task.taskName);//processing


//ex8   //imp

function Task() {
	console.log("Constructing Task");
}
function UrgentTask() {
	Task.call(this);//invoking the task by the current scope
	console.log("Urgent  Task");
}
UrgentTask.prototype = Object.create(Task.prototype);
console.log(UrgentTask.prototype.constructor); //constructor method is invoked//constructing task 
UrgentTask.prototype.constructor = UrgentTask;

let task = new UrgentTask();//constructor method is invoked //urgent task 



//ex9

function Task(name) {
	this.task1 = name;//changed to edit using the call it got changed
}
Task.prototype.getTaskName1 = function(){
	return this.task1;
}
function UrgentTask() {
	 Task.call(this, 'Edit');
	this.task2 = `${this.task1} Comment`;
}

UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.constructor = UrgentTask;
UrgentTask.prototype.getTaskName2 = function(){
	return this.task2;
}
let task = new UrgentTask();
console.log(task.task2);//edit comment
console.log(task. getTaskName2());//edit comment



//CLASS BASIC SESSION STARTS 

//ex1

class Task{

}//internally js is considering this as a function 
console.log(typeof Task);//function

//ex2

class Task{

}
class Task{

}//syntax error



//ex3

class Task {
}
let task = new Task();
console.log(typeof task);//object


//ex4

class Task {
}
let task = new Task();
console.log(task instanceof Task);//object is part of class//true


//ex5


class Task {
	constructor() {		
        console.log(“Constructing Task”);
	}
}
let task = new Task();//constructor fuinction invoked //constructing task


//ex6


class Task {
	showId() {
		console.log(1);
	}
}
let task = new Task();
task.showId();//1


//ex7

class Task {
	showId() {
		console.log(1);
	}
}
let task = new Task();
console.log(task.showId === Task.prototype.showId);//true



//ES5 VS ES6
//es6
class Task {
	constructor() {
		this.greet="Hello World";
	}
    
    showId() {
		console.log(1);
	}
}

//es5
function Task() {
    this.greet="Hello World";
    this.showId=function() {
        console.log(1);
    }
}



//ex8

class Task {
	let taskId = 2; // is it valid?//cant decalare a variable inside the class
    //but need to use this.taskid
	constructor() {
		console.log(“Constructing Task”);
	}
	showId() {
		console.log(1);
	}
}
let task = new Task();//syntax error


//ex9 //parameterized constructor 

class Task {
	constructor(id) {
        console.log(“Constructing Task”);
		this.taskId = id;
	}
	showId() {
		console.log(this.taskId);
	}
}
let task1 = new Task(1);//constructor is invoked only one time not multiple times
let task2 = new Task(2);
task1.showId();//1
task2.showId();//2


//static method and static variable in class 


//ex10

class Task {
	constructor() {
        console.log(" Constructing Task ");
		this.taskId = 2;
	}
}
Task.osName = "windows";//inside the class Task not in object 
let task = new Task();//constructing task 
Console.log(task.osName);//undefined



//ex11

class Task {
	constructor() {
		 this.taskId = 2;
	}
	showId() {
		console.log(this.taskId);
	}
	static sayHello(){
		console.log("Hello");
	}
}
let task = new Task();
console.log(task.sayHello());//error
console.log(Task.sayHello());//static method in js can be invoked by the class name 
//Hello



//STATIC IN CLASS

//In JavaScript, the keyword static is used in the 
//context of classes, introduced in ECMAScript 2015 
//(also known as ES6). Static is used to define 
//class-level properties and methods, which means 
//they belong to the class itself rather than any 
//instance of the class. This allows static methods 
//and properties to be called without creating an 
//instance of the class.


//PURPOSE OF STATIC METHOD AND PROPERTIES 


// Static members are often used to implement functionality 
// that belongs to a class, but not necessarily to any one 
// instance of that class. Common uses of static methods 
// include:

// Utility functions that are general and usable by different 
// parts of an application without dependence on object state.

// Factory methods that create instances of the class.

// Constants related to the class but which do not need to 
// be duplicated across instances.


class MathOperations {
    static pi = 3.14159;

    static add(x, y) {
        return x + y;
    }

    static multiply(x, y) {
        return x * y;
    }
}

console.log(MathOperations.pi);           // Output: 3.14159
console.log(MathOperations.add(5, 3));    // Output: 8
console.log(MathOperations.multiply(4, 3)); // Output: 12



// Characteristics of Static Members

// Called on the class, not instances: Static methods and 
// properties are called using the class name, not an 
// instance of the class.

// Inheritance: Static methods are inherited similar to 
// instance methods. If a subclass doesn’t redefine a 
// static method, it inherits the static method from its 
// parent class.

// 'this' Context: Inside a static method, the this keyword 
// does not refer to an instance of the class. Instead, it 
// refers to the class itself.






//EX12


class Task {
	constructor() {
		 this.taskId = 2;
	}
	 static  showId() {
		console.log(this.taskId);//static cannot access the this 
	}
}
let task = new Task();
Task.showId();//UNDEFINED 



//ex13


let task = new Task();

class Task {
	constructor() {
		console.log(“Constructing Task”);//ES6 STRICT MODE
	}
}



//other example IMP

class Task {
    let greet2="hello world";//why it is not possible 
	constructor() {
		console.log(“Constructing Task”);
	}

    showId() {
		console.log(“Constructing Task”);
	}
}

//here it feels like greet is decalred globally inside the clas
//and can be accessed by the constructor and showid 
//but it cant 
//class wont allow to declare any variable using this or var scope 
//let and var block and function level and wont work for the class
// constructor in class is designed in such a way that whatever variable we want to 
//access in  other function should be decalared in cosntructor 

//BUT IF WE DECALRED THE VARIABLE IN CONSTRUCTOR USING LET OR VAR 
//IT CAN BE ACCESSED INSIDE THE CONSTRUCTOR WHICH IS COMMON FOR ALL

//so connect between other function in class it should be declared  IN CONSTRUCTOR 
//




//INSTANCE BASED 

//let t = new Task();

//t-> it will allocate memory //it is an instance 
//dividing the memory 
//t space/memory  is divided into 
    - //constructor (MEM COMMON)
      //method1 (mem4X6YZ) (IF we explicit called only we can access other function inside )
      //method2 (MEM4ETZX) ()

// all the methods can share their data across the common memory location that is constructor 


//then t.constructor();//invoked 



//****Key Differences: this.taskId vs let taskId


//Using this.taskId:

//this.taskId declares a property on the instance of the 
//class.

//Each instance of the class will have its own taskId.

//This property is accessible anywhere in the class via 
//this.taskId and can also be accessed (or modified, 
//if public) from outside the instance.


let taskInstance = new Task();
console.log(taskInstance.taskId); // Outputs: 2



//Using let taskId in the constructor:


//let taskId defines a local variable inside the 
//constructor function.

//It is not a property of the instance. Instead, 
//it’s a simple variable accessible only within the 
//constructor during the instantiation process.

//It cannot be accessed from other methods or from 
//outside the instance unless explicitly exposed 
//(e.g., by returning it or setting it as a property).


class Task {
	constructor() {
		let taskId = 2; // Local to the constructor
		this.showId = function() {
			console.log("Constructing Task, ID:", taskId); // Closure
		};
	}
}
let taskInstance = new Task();
taskInstance.showId(); // Outputs: Constructing Task, ID: 2
// console.log(taskInstance.taskId); // Error: taskId is not accessible outside the constructor





//EX14

class Task {
}
console.log(window.Task === Task);//FALSE //NO TWO INSTANCES ARE SAME

//CLASS IS COMPLETELY A PRIVATE MEMBER 
// The output is false because:

// The class Task declared at the global scope does not 
// create a Task property on the global window object.
// Thus, window.Task is undefined, and the declared 
// Task class is a separate function that's not attached 
// to window.



//EX15

class Task {
	constructor() {
		this._id = 1;
	}
	get id(){
		return this._id;
	}
	set id(value){
		this._id = value
	}
}
let task = new Task();
task.id = 10;
console.log(task.id);//10 

//EX16  IMP

class Task {
	constructor() {
		console.log(“Constructing Task”);
	}
}
class UrgentTask extends Task {
	constructor() {
		super();
		console.log(“Urgent  Task”);
	}
}
let task = new UrgentTask();


//output
//Constructing Task 
//Urgent Task 


//SUPPER used to invoke the base class constructor 



//ex17

class Task {
	constructor() {
		this.id1 = 1;
	}
}
class UrgentTask extends Task {
	constructor() {
		super();
		this.id2 = 2;
	}
}
let task = new UrgentTask();
console.log(task);//UrgentTask{id:1,id2:2}
console.log(UrgentTask.prototype.__proto__ === Task.prototype)//

//UrgentTask.prototype.__proto__---- (UrgentTask.prototype.).__proto__ refers to TASK prototype


//ex18  //imp


class Task {
	getTaskPriority() {
		return 1;
	}
}
class UrgentTask extends Task {
	getTaskPriority() {
		return 100;
	}
}
let task = new UrgentTask();
console.log(task.getTaskPriority());//100//always invoke the child class property is invoked 



//ex19

class Task {
	getTaskPriority() {
		return 2;
	}
}
class UrgentTask extends Task {
  getTaskPriority() {
	return super.getTaskPriority() * 100;//base class 
  }
}
let task = new UrgentTask();
console.log(task.getTaskPriority());//200



//ex20


class Task {
	constructor() {
		this.taskName = “Edit”;
 	}
}
class UrgentTask extends Task {
	constructor() {
		super();//return the base class reaches here 
		this.taskName = `${this.taskName} Comment`;
	}
}
let task = new UrgentTask();
console.log(task.taskName);//edit comment



//ex21

class Task {
	static getDefaultName() {
		return “Task: unknown”;
 	}
}
console.log(Task.getDefaultName());//Task:unknown


//EX22  IMP

class Task {
	static let name = “Task: unknown”;//NO NEED OF LET FOR STATIC 
}
console.log(Task.name);//ERROR

