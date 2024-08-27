let user ={
    id:101,
    name:"test1"
}

//In js there is property discriptor that will discribe about the object properties 

console.log(Object.getOwnPropertyDescriptor(user));
//shows about the 2 property and id 
//along with writable , enumerable , configurable
//also the [[prototype]] 


//writable is true then we can change the value 
user.id=100;
//enumerable is true then we can iterate through the loop 
for(let key in user){
    console.log(user[key]);
}

//if the configurable is true then we can delete the value 

delete user.id
console.log(user);

//Property Descriptor - is an object that describe the attribute of a property 
//data descriptors - value , writable , enumerable , configurable 
//accessor descriptor - getter and setter function through which the we can set 
                        //set and update the value 


user.email="jerryu_@gmail.com"// we have the setter and getter value for the updation
//above case we have the setter to work 
console.log(user.email);//here the getter work internally 

function Employee(){
    this.empName="test1";
    this.age=20;
}

let emp1 = new Employee();

console.log(Object.getOwnPropertyDescriptor(emp1));

//shows the data and access descriptors 

let obj1={
    id:101,
    name:"obj1"
}

let obj2= Object.create(obj1);
console.log(obj2);
//create an object and the object which we passed whose property 
//will be act as a prototype 

console.log(Object.getOwnPropertyDescriptors(obj1));
//here we can see the property descriptor of the obj1

console.log(Object.getOwnPropertyDescriptor(obj1,"id"));
//here we can seet the propertu descriptor of the id only 

console.log(Object.getOwnPropertyDescriptor(obj2));
//{} - output
//since obj2 dont have any property in the object2 


//DEFINE PROPERTY METHODS 


let obj={
    id:101,
}
Object.defineProperty(obj,"id",{
    writable:false
    //enumerable:false//can't access through keys 
    //configurable :false
})

obj.id=102;
console.log(obj);
//forcefully we have change the property writable to false 

console.log(Object.keys(obj));
//here the keys cant be print 

delete obj.id
console.log(obj)
//nothing will be deleted 


//ACCESS DESCRIPTORS

let user = {
    name:"test1"
}

Object.defineProperty(user,"name1",{
    get(){
        return user.name
    },
    set(x){
        if(x.length>4){
            console.log("invalid input");
        }else{
            user.name=x
        }
    }
})

user.name1="sameer";//internally it call the setter and assign the value 
console.log(user.name);//internally it call the getter and return the value 



//if your using the value then dont use setter function 




