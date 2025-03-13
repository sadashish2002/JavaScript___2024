// singleton object
const tinderUser = new Object()

// non singleton object
const tinderUserTwo = {}


console.log(tinderUser);   //return empty object
console.log(tinderUserTwo); //return empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

//nesting object
const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "sadashish",
            lastname : "kumar"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);


// merge two object in one object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}  // merge two object as object in object3
    //or
//const obj3 = Object.assign({},obj1,obj2)
    //or
const obj3 = {...obj1,...obj2}
console.log(obj3);

// console.log(Object.isFrozen(obj3));

//how to accees array of objects 

const user = [
    {id: 1 ,
      email: "dghdag@gmail.com"
    },
    {id: 1 ,
        email: "dghdag@gmail.com"
    },
    {
        id: 1 ,
      email: "dghdag@gmail.com"
    },
    {
        id: 1 ,
      email: "dghdag@gmail.com"
    },
]

console.log(user[1].email)

console.log(tinderUser);

//different method of object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//How to access specifi property of object for multiple times in smart way 

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor) // simple way to access

// smart way to destructor name of property

const {courseInstructor:instructor} = course
// we can access it multiple time
console.log(instructor);
console.log(instructor);
console.log(instructor);
