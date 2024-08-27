// let user ={
//     name:"jerry",
//     age:20,
//     ten:function(){
//         console.log(this.age);
//     }
// }

// console.log(user.ten());


(function(){
    let a=b=3;
    console.log("hello world");
})();

console.log(b);//3
console.log(a);//


// let a=()=>{
//     console.log("hello world")
// }


// 


// let ar=[1,2,3,4,5,6,7,8,9,10];
// let pro3=ar.map((mult)=> mult*3);
// let sum=0;
// console.log(pro3);
// for(let i of pro3){
//     if(i%2==0){
//         console.log(i);
//         sum=sum+i;
//     }  
// }
// console.log("sum of the even numbers" + " " + sum);


let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Multiplying each element by 3
let pro3 = ar.map(mult => mult * 3);
console.log(pro3);

// Filtering even numbers and reducing to get the sum
let sum = pro3.filter(num => num % 2 === 0)
              .reduce((accumulator, evenNum) => accumulator + evenNum, 0);

console.log("Filtered even numbers:", pro3.filter(num => num % 2 === 0));
console.log("Sum of the even numbers: " + sum);

// *3
// even in that 
// sum of those 