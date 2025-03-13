const userEmail = "h@hitesh.ai" // true if string is present within ""
// const userEmail = "h@hitesh.ai" // false if string is not present within ""

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
    
// }

// falsy value - false , 0 ,-0, BigInt 0n,"", null,undefined,NaN

// true value - true , 1 , "0" , "ram", 'false'," ",[] ,{},function(){}


if(userEmail.length === 0){
    console.log("Array is empty");
    
}
else{
    console.log("Array is not empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10

val2 = null ?? 10

val3 = undefined ?? 15

val4 = null ?? 10 ?? 20

console.log(val1);

console.log(val2);

console.log(val3);

console.log(val4);

// Terniary Operator 

// syntax - condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("greater than 80 ") : console.log("less than 80");



