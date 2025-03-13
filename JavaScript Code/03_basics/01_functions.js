function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    
}

// sayMyName()

function addTwoNumbers(num1 , num2) {
    // console.log(num1 + num2);
    return num1 + num2
    
}

addTwoNumbers(2,6)
addTwoNumbers(2,"4")
addTwoNumbers(2,"a")
addTwoNumbers(2,null)

const result = addTwoNumbers(5,9)

console.log("result: " ,result);

function loginUserMessage(username) {
    // if(username == undefined){
        if(!username){
        console.log("please enter a username");
        return ;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()); // undefined just logged in 
console.log(loginUserMessage("sadashish")); //sadashish just logged in

//when u dont know how many num of parameter will come to function
//use rest operator

function calculatePrice1(...numOne){
    return numOne
}

//console.log(calculatePrice1(200,400,600));


function calculatePrice2(val1 ,val2, ...numOne){
    return numOne
}

//console.log(calculatePrice2(500,200,200,400,600));


//object

const user = {
    username : "sadashish",
    price: 100
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user) 
//    or 

handleObject({
    username:"sadashish",
    price:123
})


//How to pass array and get specific value

const myNewArray = [200,400,100,500]

function returnSecondVale(getarray) {
    return getarray[1]
}

console.log(returnSecondVale(myNewArray));
console.log(returnSecondVale([123,321,456,654]));

