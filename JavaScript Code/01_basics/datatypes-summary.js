//There are two types of datatypes in JS

// 1. Primitive Datatype
  // 7 types : String ,Number , Boolean,null,undefined,Symbol,Bigint

const score =100
const scroeValue = 100.3;
let name = "sadashish"
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);

console.log(id==anotherId);

const bigNumber =344267986743213135098173075n


//2. Non Primitive (Reference)
   //3 types : Array , Objects , Functions

const heros = ["Shaktiman","naagraj","doga"];

let obj ={
    name:"sadashish",
    age: 23,
    usn: 12345,
}

// function definition- function(){}

const myFunction = function(){
    console.log("Hellow world");
    
}

console.log(typeof bigNumber);   // bigint
console.log(typeof name);   // string datatype
console.log(typeof scroeValue);   // number
console.log(typeof isLoggedIn);   // boolean type
console.log(typeof outsideTemp); //object type
console.log(typeof anotherId);  // symbol type
console.log(typeof userEmail);  // undefined type
console.log("********************************");
// all non primitive datype are of object type only except function is of object function
console.log(typeof obj);
console.log(typeof myFunction);
console.log(typeof heros);


// +++++++++++++++++++++++++++ Memory Types +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

          // There are two types of memory
//1. Stack (all Primitive Datatype)
 /// Whenever u declare a variable then u get a copy of variable

//2. Heap  (Non-primitive Datatype)
  /// whenever u declare a obj, fun or array then u get reference of original value
  /// so whenever u will change something then it will directly change to origignal declare variable


  //1. stack example
let anothername = "sadashish"
let youtubename = anothername  // copy of anothername variable is assign to youtubename variable
youtubename = "gop7u"
console.log(anothername);
console.log(youtubename);

//2. Heap example
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne // userTwo will get reference of userOne
console.log(userOne);
console.log(userTwo);

// anymodification in userTwo that will modify userOne value also
userTwo.email = "sadashish@google.com"

console.log(userOne);
console.log(userTwo);

