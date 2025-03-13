class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    // override construct of parent class
   constructor(username,email,password){
//    username.call(this,username)// use in older version
    super(username); // to set username value and take this (current context) value to User() parents.
    this.email = email;
    this.password = password;
   }
      addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
      }



}

// create object
const chai = new Teacher("Kiran","kiran@teacher.com","123");
chai.addCourse();
chai.logMe();

const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai === masalachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);



