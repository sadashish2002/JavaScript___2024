function SetUsername(username){
    //complex DB calls 
    this.userename = username
    console.log("called");
    
}

function createUser(username,email,password){
//    SetUsername(username) 
// // it will call function and just took reference but after that function  and its declare variable will deleted so it will not availabe for net execution context 

    SetUsername.call(this,username) // it will hold refrence and return value ,variable
    // this will pass its current context to username() so that it will hold refrence, return value and variable even after function execution context will remove
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123");
console.log(chai); //createUser {email: 'chai@fb.com', password: '123'}
