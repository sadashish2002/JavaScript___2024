// let a = 10
// const b = 20
// var c = 30

if(true){

var c = 30
}
// console.log(a);
// console.log(b);
console.log(c); //this is problem that var c is local variable declare under if scope but then also it is accessible to out of scope


//nested function

function one() {
    const username = "sadahsish"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); //error because out of scope
    two()
}
one()



//+++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++
//here we can call function first and then define

console.log(addone(5))
function addone(num) {
    return num + 1
}

//here we can't do because we are declaring a variable after calling a variable so error will come for such type of function definition
//ReferenceError: Cannot access 'addTwo' before initialization

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}

