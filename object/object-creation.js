// how many ways we can create object in js

                            // 1> object lieterals


function greet(){
    console.log("hii")
}


greet();


window.alert("hii ai m alret box")


//USE OF THIS AND OTHER TYPE OF OBJECT 
// [this--window]

// "this" in js----context : WHERE UR CODE EXCUTE


uisng object lietral----
1> 
let obj = {
    name:"test1",
    age:20,
    showName:function(){
        console.log("show name functio")
    }
}

                //2 uisng Object constructor function(construction function)

let obj1 = new Object()

console.log(obj1)//EMPTY {}
obj1.email="test1@gmail.com"
obj1.sal=2000;

obj1.showName3 = function(){
    console.log("shownmae3")
}
console.log(obj1)//complete obj

obj1.showName3();

/// 3rd uisng user defined constructor function
//CONTRUCTOR: CONSTRUCT THE OBJECT AND INTIALIZE THE 
//DATA MEMBER AND ITS PROPERTY 

function Employee(){
    console.log("hi i am employee function");
    console.log(this);//window 
}

let e1 = Employee()//
console.log(e1)//{undefined}
//------

//calling the function with new keyword 
function Employee(){
    console.log("hi i am employee function");
    console.log(this);//Employee{}
}

let e1 = new Employee()//create an empty and return // function will run as a constructor function 
console.log(e1)//Employee{}
//------


//object with this and new

function Employee(){
    console.log(this)
}

let e1 =Employee()

console.log(e1)//undefined

function Employee2(){
    console.log("hi i am employee2 functin")
    console.log(this);//

    this.name="sameer"
    this.salary=2000;
}

let e2 = new Employee2();//1>brand empty {}  and "this"----refres--newly created obejct; it will return that created empty object

// console.log(e2); {name:"sameer",sal:2000}

console.log(e2)//return object if this doesnt used above //and if this used then return with value 


//-----

function Teacher(name,sal,age,address){
    this.name=name
    this.sal=sal;
    this.age=age;
    this.address=address;

}

let t1 = new Teacher("test1",20000,40,"hyd");  
// {name:'test1',sal:2000,age:40,address:hyd}---this

// let t2 = new Teacher("test2",3000,40,"blr")

 console.log(t1)

// console.log(t2)



                        //4.Object.create()
const personPrototype = {
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const john = Object.create(personPrototype);
john.name = "John";
john.age = 30;
john.greet();  // Outputs: Hello, John

// dynamic scope----------------------------------------------------

// data types,hoisting,scoping,this, function,return tyep,new keyword,constructor function





//DYNAMIC ALLOCATIION IN JS 

const user = {
    name: "abheek",
    age: "21",
    "abheek rajeev": "me"
}
let ans=prompt("wha do u wnt to print(name,age,abheek rajeev");
console.log(ans);
// console.log(user.name);
// console.log(user["name"])
// console.log(user.ans);
// console.log(user[ans]);
 
console.log(user["abheek rajeev"])


