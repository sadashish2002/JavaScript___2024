  //Singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
     name : "Sadashish",  
    "full name": "Hitesh Choudhary",    
      age: 18,
      mySym: "mykey1", //act as a string
      [mySym]: "mykey1", // act as a symbol
      location: "Jaipur",
      email : "hitesh@google.com",
      isLoggedIn : false,
      lastLoginDays : ["Monday", "Saturday"]
    }

// console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.age);
console.log(JsUser.location);
console.log(JsUser.lastLoginDays);
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);
console.log( typeof JsUser[mySym]);

// change value of object

JsUser.email = "sadashishkumar@gmail.com"
console.log(JsUser.email);

//if u dont want that anyone should not change it
//then freeze it 
 
 //Object.freeze(JsUser);

//JsUser.email = "gopu2865@gmail.com"
console.log(JsUser);

// add a function in object

JsUser.greeting = function() {
    console.log("Namste JS user");
    
}

JsUser.greetingTwo = function() {
    console.log(`Namste JS user2, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






