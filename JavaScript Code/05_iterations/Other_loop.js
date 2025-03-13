// for of 
//1. for of () loop is use for arry and map


// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings = "Helo Duniya"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('SA' ,"sadashish");
map.set('IN' ,"India");
map.set('USA' ,"United states of America");
map.set('FR',"France");

console.log(map);

// print output in key,value together
for (const all of map) {
    console.log(all);
    
}
// print output seprate seprate key and value 
for (const [key,value] of map) {
    console.log(key, ':-',value);

   }

   // can't iterate object using same syntax of for of loop like map
 
  /* const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
   }
//ERror
   for (const [key,value] of object) {
    console.log(key ,':-',value);  //error
    
   } */

// FOR IN () loop 
  // it is useful for object to access key and value

const myObject={
    js: 'javascript',
    cpp: 'C++',
    py: 'python',
    ry: 'ruby'
}

for (const key in myObject) {
//    console.log(key);
    
    console.log(`${key} shortcut is for ${myObject[key ]}`);
   
}

const program = ["js","rb","py","java","cpp"]
for (const key in program) {
   console.log("key add of program array is :" +key);
   console.log(program[key]);
   
}


// For Each loop

const coding = ["js","rb","py","java","cpp"]

coding.forEach( function (item) {console.log(item)});

//or
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

coding.forEach((item)=>{console.log(item)})
//or
console.log("++++++++++++++++++++++++++++++++");

coding.forEach((item,index,arr)=>{console.log(item,index,arr)})

//or
console.log("++++++++++++++++++++++++++++++++");

const myCoding = [
    {
        langName : "Javascript",
        langFileName : "js"
    },
    {
        langName : "Cplusplus",
        langFileName : "c++"
    },
    {
        langName : "Python",
        langFileName : "py"
    },
]

myCoding.forEach((item)=>{
    // console.log(item);
    console.log(item.langFileName);
    console.log(item.langName);
    
})