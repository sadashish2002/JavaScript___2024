  // Object literal

// const u=User = {
//    username : "sadashish",
//    logicCount : 8 , 
//    signedIn : true ,

//    getUserDetails : function(){
//     // console.log("Got user details from database");
//      console.log(`Username : ${this.username}`);
//     //  console.log(this);
     
//    }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // empty {} because dont have any current context

        // Constructor Funcition 

// const promiseOne = new Promise() 

// new is a constructor function which allow create
//  multiple instance form single object litral 

function user(username , loginCount , isLoggedIn){
    this.username = username;
    this.logicCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
      console.log(`Welcome ${this.username}`);
      
    }

    return this //  passing object user
}

const userOne = new user("Gopu",12,true);
const userTwo = new user("ChaiAurCode",11,false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);
// console.log(userTwo.greeting());

// new  keyword

// s-1 => use of new will create new object
// s-2 => constructor function will call because of new keyword
// s-3 => all argument will get inject with this keyword 
// s-4 => we will get all value in function 