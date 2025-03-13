//Convert to Number Datatype

let score ="33"
let score1 ="33abc"
let score2 = null
let score3 = undefined
let score4 = true
let score5 = "history"
// console.log("sadashish");

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)  // "33" => 33
// let valueInNumber = Number(score1) // "33abc" => NaN
// let valueInNumber = Number(score2)  // null => 0
// let valueInNumber = Number(score3)  // undefined => NaN
// let valueInNumber = Number(score4)  // true => 1  / false => 0

let valueInNumber = Number(score5) // "history" => NaN

// console.log(typeof valueInNumber);
// console.log(valueInNumber); 



// convert to boolean datatype 

let isLoggedIn = 1
let isLoggedIn1 = "hitesh"
let isLoggedIn2 = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn) // 1 => true; 0=>false
// let booleanIsLoggedIn = Boolean(isLoggedIn1) // "hitesh" => true
let booleanIsLoggedIn = Boolean(isLoggedIn2) // "" => false
// console.log(booleanIsLoggedIn);


// convert to String datatype

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

//********************* Operations ****************************** */

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" +2);
// console.log(1 +"2");
// console.log("1" +2+2);
// console.log("1" +2+"2");
// console.log(1 +2+"2");
// console.log("1"+"2" +2);

// console.log(3+4*5%3);


// console.log(true); // true => true
// console.log(+true); // +true =>1
// console.log(+""); // +"" =>0

let num1,num2,num3
num1 =num2 =num3 =4 +4
console.table([num1,num2,num3])

//post increment and prefix increment

let game = 100
console.log(++game);
console.log(game);
console.log(game++);
console.log(game);
