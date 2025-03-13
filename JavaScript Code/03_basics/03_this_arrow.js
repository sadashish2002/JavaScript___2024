// this keyword is use to access current context within scope

const user = {
    username : "sadashish",
    price : 999,
   
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); 
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//regular function 

//In regular functions, the value of this is determined by how the function is called. 
// It can refer to different objects depending on the context:
function chai(){
   
    console.log(this); // we can access this keyword properties in regular fun
    
}

// chai()
                // Arrow function
//arrow function -do not have their own this context. Instead, they inherit this from the surrounding lexical context 
// (the context in which the arrow function was defined).
const coffee = () => {
   
      console.log(this); //{}- we can not access this keyword properties in regular fun

  
}
// coffee()

// different way to write arrow function

// Explicit return - curly braces required return keyword 
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

        //or 
// Implicit return - () do not require return keyword

// const addTwo = (num1,num2) => num1 + num2
     // or
const addTwo = (num1,num2) => (num1 + num2)


console.log(addTwo(3,4));

// How to return object 
const returnObject = (num1,num2) => ({username : "sadashish"})
console.log(returnObject(5,4));

//how to write function for array
const myArray = [1,2,4,5,4,6]
myArray.forEach(function(){})
myArray.forEach(()=>{})
myArray.forEach(()=>())

function regularFunction() {
    console.log(this);
  }
  
  const obj = {
    method: regularFunction
  };
  
  obj.method(); // Logs the obj object
  regularFunction(); // Logs the global object 

//Regular Functions: this is dynamic and depends on how the function is called.
//Arrow Functions: this is static and inherits from the surrounding lexical context.