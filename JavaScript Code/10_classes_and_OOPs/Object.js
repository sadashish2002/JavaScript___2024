// IN JavaScript everything is an object
  
// function is also an Object
         //Prototype
//prototype of Object is null 

// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // return empty {}

// constructor function
function createUser(username,score){
    this.username = username 
    this.score = score
}
//injecting increment method using prototype in createUser function

createUser.prototype.increment = function(){
    this.score++ // this clarify which chai or tea has called 
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
// new keyword is use to tell chai or tea variable that creatuser has added new propery like increment or printme

const chai = new  createUser("chai",25) // new keyword is mandatory
const tea = new createUser("tea",250) 
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
                      This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
                           If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/ 
