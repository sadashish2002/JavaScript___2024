// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ['Shaktiman','Mr. India']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);


// Array methods
   
myArr.push(6)
myArr.push(7)   //insert into last of array
console.log(myArr);

myArr.pop() // delete last element
console.log(myArr);

myArr.unshift(9) //insert element in first of array
console.log(myArr);

myArr.shift()
console.log(myArr); //delete first element of array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr);
console.log(myArr.indexOf(3));
console.log(typeof newArr);

//slice , splice

// slice -  The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array.
//splice - The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place, modifying the original array.

console.log("A " , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B " , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C " , myArr);






