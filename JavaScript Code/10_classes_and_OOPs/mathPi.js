console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); //3.141592653589793

//Question is why is it not change

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

//because property writable , enumberable , configurable are inbuild false ,
//that's y we cant change value

/*{value: 3.141592653589793, 
    writable: false, 
    enumerable: false, 
    configurable: false} */

    // we can create such object also
const chai = {
    name: 'ginger chai',
    price : 250,
    isAvailable : true 
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(Object.getOwnPropertyDescriptor(chai,"price"));
/*
{value: 'ginger chai', 
writable: true, 
enumerable: true,
 configurable: true} */ 

// we can change property of our created object
// Object.defineProperty(chai,'name',{
//     writable : false,
//     enumerable: false,
//     configurable: false
// })

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

/*{value: 'ginger chai', 
writable: false, 
enumerable: false, 
configurable: false} */

// TO ACCESS KEY VALUE PAIR OF CHAI OBJECT

// for(const[key, value] of chai){
//     console.log(`${key} : ${value}`); // chai is not iterable
    
// }

for(let [key, value] of Object.entries(chai)){
    console.log(`${key} : ${value}`); 
}





