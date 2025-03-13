let myName = "hitesh     "

console.log(myName.length);

// myName.trueLength(); //Need to  create method to return only letter lenght

let myHero = ["SambhaJi","ShivajiMaharaj","MaharanaPartap"]

let heroPower = {
          SambhaJi : "sword",
          ShivajiMaharaj : "horse",
          MaharanaPartap : "jewlin",

          getSambhajiPower : function () {
            console.log(`Spidy power is ${this.SambhaJi}`);
   
        }      
}

Object.prototype.sadashish = function(){
    console.log(`sadashish is pressent in all objects`);
    
}
//******************************************************************** */
/*

FUNCTION -----\
               \
array ------------> OBJECT ----> NULL
               /
String--------/
*/
// function , array , string goes throught object ..
// So ACTUALLY we access top level hierarchy (OBJECT) and added a property to object using prototype.
// So array , function , string will get that property because all comes below OBJECT . 
//****************************************************************** */
// heroPower.sadashish()

myHero.sadashish(); // array

//-----------------------------------------------------------------
//IF We will give power to array then whether object will have power of heysadashish()

// check it 

Array.prototype.heysadashish = function(){
    console.log(`Sadashish says power in array`);
    
}

// heroPower.sadashish() //object power
// myHero.sadashish()  //object power is use to array
// myHero.heysadashish() // array power is use to array only

// heroPower.heysadashish() // object will not have access of heySadashish() because it is assign to its lower hierarych array individually


//Inheritance

// Outdate prototyple inheritance

const User = {
    name : "chai",
    email : "cjai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport={
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) 

//==============================================

let anotherUsername = "ChaiAurCode        "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`${this.anotherUsername}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"hitesh  ".trueLength()
"sadashish ".trueLength()



