//getter and setter is use when u want taht some user dont have access of my password(for example)


class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    // getter setter name must be same as property of constructor
   
//error : Maximum call stack size exceeded
// because constructor and our setter both want to set value for password 
// that's y this error occurs.
//   get password(){
//     return this.password.toUpperCase();
// }

//     set password(value){
//         this.password = value
//     }

// we can cancel error by overriding constructor that 
// constructor will set value of email but not password.

get password(){
    return this._password.toUpperCase();
}

    set password(value){
        this._password = value
    }

    // getter setter of email

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    
}

const hitesh = new User("h@hitesh.ai","sadashish")
console.log(hitesh.password);
console.log(hitesh.email);


