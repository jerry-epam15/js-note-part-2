//sorting in other way //doubt 

function compareNumeric(a, b) {
    console.log(a,b);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    console.log(a,b);
}

let arr = [1, 15, 7, 2];

arr.sort(compareNumeric);

console.log(arr);  // 1, 2,7, 15 


// //SORTING METHOD 2 

// let arr = [1, 2, 15];

// arr.sort(function (a, b) { return a - b; });

// alert(arr);  // 1, 2, 15


// //SORTING METHOD 3  this method can be used for the string sorting


// let arr = ["jerry", "abheek ","zen"];
// alert(arr.sort());


//SORTING METHOD 4 

//NORMAL METHOD 

// let ar=[56,12,34,100];
// for(let i=0;i<ar.length;i++){
//     for(let j=1;j<(ar.length-i);j++){
//         if(ar[j-1]>ar[j]){
//             let temp=ar[j-1];
//             ar[j-1]=ar[j];
//             ar[j]=temp;
//         }
//     }
// }
// console.log(ar);
