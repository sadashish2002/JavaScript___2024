 //promises - this object represent eventually completion or failure of asynchronous operation and its resulting value

 // three types of promises 
  //1. pending
  //2. fullfilled
  //3. rejected
//how to create promises

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task 
    // Db calls , crypthography , network 
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

// once promise created then it must be consumed

promiseOne.then(function(){ // resolve ka connection hai .then k sath
  console.log("Promise consumed");
  
}) 

// we need to connect resolve and .then () tab output m "promise consume aayega"
// add resolve(); in promise function

//***************************************************************** */

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

//***************************************************************** */

const promiseThree = new Promise(function(resolve,reject){
           setTimeout(() => {
            resolve({username: "chai" , email: "chai@example.come"}) //  after promise task done then pass data to .then()
           }, 1000);
})

//consume promise

promiseThree.then(function (user) {
    console.log(user);
    
})

//***************************************************************** */

const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"hitesh", password:"123"})
    }else{
        reject('Error: Something went wrong')
    }
},3000)
})

//consume promise

promiseFour.then((user)=>{  // avoid call back hail 
     console.log(user);
     return user.username
     
}).then((username)=>{    // chaining process
console.log(username);

}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolved or rejected"));

//***************************************************************** */


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        }else{
            reject('Error: JS went wrong')
        }
    },3000)
});

// consume using async

async function consumePromiseFive(){ // async can't directly handle error if error =true so use try block
   try{
    const response = await promiseFive
    console.log(response);
   }catch(error){
console.log(error);

   }
    
}

consumePromiseFive();

//***************************************************************** */
// async function must wrap in try catch block

// async function getAllUsers() {
//     try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      // const data = response.json(); //it will not show user details.
//      const data = await response.json(); // add await so that after processing all data it will come back
//      console.log(data);
//     } catch (error) {
//      console.log("E:" + error);
     
//     }
      
//  }
 
// getAllUsers();

//***************************************************************** */
// using then and catch above function implementation

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
