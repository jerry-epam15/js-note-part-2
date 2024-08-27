//1. for Loop

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);  // Perform any operation with array[i]
}


//2.for..of

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);  // Perform any operation with element
}

//3.forEach() Method

const array = ['a', 'b', 'c', 'd'];
array.forEach(element => {
    console.log(element);  // Perform any operation with element
});

//4.for...in Loop
const array = [1, 2, 3, 4, 5];
for (const index in array) {
    console.log(array[index]);  // Perform any operation with array[index]
}

//