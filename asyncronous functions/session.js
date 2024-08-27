//Suppose we have a function 

function orderNow(){
    console.log("ordering now ");
}

function payNow(){
    console.log("paying now ");
}

orderNow();
payNow();

//it will print like 
///ordeing now 
//paying now 

// this piece of code is syncronous code //code which execute one afetr
//another

//problem for this type fucntion is 
//suppose the order now take 2 minutes  more time to compute 
//it means paynow has to wait for 2 minutes 

//due to one function other functions have to wait to compute

//to overcome this asyncronous functions in js 

function orderNow(){
    // taking time 2 min for execution
    setTimeout(()=>{
        console.log("ordreing now")
    },2000)

}

function payNow(){
    console.log("paying now")
}

function searchOrder(){
    console.log("searhing start")
}

orderNow();
payNow();
searchOrder();

//output

//paying now
//searching start 
//ordering now 


//the code is asyncronus 
//the js code will not wait for the first for to complete
//immediately move to the next part 
//asyncronous function execution in parallel 

//here the problem now is the pay now  is completly executed before the 
//order now gets completly done 


//for this there 3 function in js 

//call back //promise //async await




//CALLBACK 

//passing a function as an argument to a function 
//the passed function is call it from the other function to which it get the function 

function orderNow(cb){
    setTimeout(()=>{
        console.log("order done")
        cb();
    },2000)
}


function payNow(){
    console.log("paymnet done")
}

orderNow(payNow);

//order done
//payment done



//issue of callback 

//for multiple functions


// callback hell -here multiple call back execution 


function task1(cb){
    setTimeout(()=>{
        console.log("task 1 done")
        cb();
    },2000)
}


function task2(cb){
    setTimeout(()=>{
        console.log("task 2 done")
        cb()
    },2000)
}

function task3(cb){
    setTimeout(()=>{
        console.log("task 3 done")
        cb()
    },2000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("all task perfectly done")
        })
    })
})

//task 1 done
//task 2 done
//task 3 done
//all task perfectly done 



//to overcome callback hell we use promise

//promise is an object that created from the promise constructor function 
//is to manage in asyncronus function 



//promise has three states 

// {
//     pending: 
//     fullfilled
//     reject:
// }


function orderNow(){
    return new Promise(function(resolve,reject){//executer function 
        setTimeout(()=>{
            console.log("order done")
            resolve("order placed successfully");
        },2000)
    })

}


function payNow(){
    console.log("paymnet done")
}

function greet(){
    console.log("hii good morning")
}


orderNow().then(function(result){
    console.log(result)
    payNow()
}).catch(function(err){
    console.log(err)
})

greet();
//hi good morning
//order done
//order placed successfully
//payment done




//callback nd promise difference 

//in callback once the power given function is done with the work other execute 
//transfering of control to other function 





function orderNow(cb){
    setTimeout(()=>{
        console.log("order done")
        cb();
        cb();
        cb();
        cb();
    },2000)
}


function payNow(){
    console.log("paymnet done")
}

orderNow(payNow);

//order done
//payment done
//payment done
//payment done 
//payment done


//issue in the call back that calling the argumented function 
//many times 


//in promise 


function orderNow(){
    return new Promise(function(resolve,reject){//executer function 
        setTimeout(()=>{
            console.log("order done")
            resolve("order placed successfully");
            resolve("done done")
            resolve("done 333")
        },2000)
    })

}


function payNow(){
    console.log("paymnet done")
}

function greet(){
    console.log("hii good morning")
}


orderNow().then(function(result){
    console.log(result)
    payNow()
}).catch(function(err){
    console.log(err)
})

greet();

//hi good morning 
//order done 
//order placed successfully
//payment done 

//onlly one resolve is enough 




//REAL TIME USE CASES OF THIS PROMISE AND ALL 

//FETCH USED HERE 

let user =[]

function getUsers(){//retrive the data from 3rd party api
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        return res.json();//converting the data in json format 
    }).then(function(data){
        users=data
    })


}

function displayUsers(){
    console.log("user recieved =",users)
}

getUsers();
displayUsers();//user recevied =[]

//here while getting the user data it executes the display user 
//so at that time no data in user recevied 
// to handle this we can use call back or promise 

//below solution
//here we dont know the particular time at which it gets complete 


//-------------------------------------


let users = []

let wifi = true

function getUsers(){//retrive the data from 3rd party api
    return new Promise(function(resolve,reject){
        if(wifi){
            //used to call api path url
            fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
                return res.json();//converting the data in json format 
            }).then(function(data){
                users=data
                resolve();
            })
        }else{
            reject("netwrok issue cannot get users from api")
        }


    })

}

function displayUsers(){
    console.log("user recieved =",users)
}

getUsers().then(function(){
    displayUsers();
}).catch(function(err){
    console.log("err")
    console.log(err)
})
// displayUsers();


//now we have the proper data in the user data





//async await -- written in top of the promise 

//handle the issues in aysncronous programming 


//suppose we have

function doTask1() {
    setTimeout(()=>{
        console.log("task1 completed")
    },2000)
}

function doTask2() {
    setTimeout(()=>{
        console.log("task2 completed")
    },2000)
}

function allTaskDone() {
    console.log("all task done")
}

doTask1();
doTask2();
allTaskDone();
//all task done
//task1 completed
//task2 completed







let wifi = false
function doTask1() {

    return new Promise(function (resolve, reject) {
        if (wifi) {
            setTimeout(() => {
                resolve("task1 completed")
                // console.log("task1 completed")
            }, 2000)
        } else {
            reject("network is not good")
        }

    })

}


function doTask2() {
    return new Promise(function (resolve, reject) {
        if (wifi) {
            setTimeout(() => {
                resolve("task2 completed")
                // console.log("task1 completed")
            }, 2000)
        } else {
            reject("network is not good")
        }
    })
}


function allTaskDone() {
    console.log("all task done")
}

// doTask1().then(function(){
//     doTask2().then(function(){
//         allTaskDone();
//     })
// })

//promise based above instead of that async 


// function performTask(){
//     await doTask1();
//     await doTask2();//tells others to wait until the work done 
//     allTaskDone();
// }

//awiat work under aync function or top level function 

// async function performTask(){
//     await doTask1();
//     await doTask2();//tells others to wait until the work done 
//     allTaskDone();
// }
//performTask();

//here async and await make the code feel working in asyncronous way 


async function performTask() {
    try {
        let result1 = await doTask1();
        let result2 = await doTask2();
        console.log(result1, result2)
        allTaskDone();
    } catch (e) {
        console.log(e)
    }

}
performTask();


