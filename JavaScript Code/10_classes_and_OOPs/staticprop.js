class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
 // static is add to stop instance of object to access method

   static createId(){ 
            return `123`
    }
}

const hitesh = new User("hitesh")

// console.log(hitesh.createId()); // error because static is added
console.log(hitesh.logMe());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","iphone@gmail.com")

iphone.logMe();