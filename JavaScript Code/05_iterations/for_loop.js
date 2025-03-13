for (let i = 1; i <=10 ; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
//   console.log(`Outer loop value: ${i} and inner loop ${j}`);
   console.log(i + ' * ' + j + ' = ' + i*j);  
    }
    
}

let myArray = ["flash","batman" , "superman"]
console.log("Length of array is : "+ myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//break and continue

for (let index = 1; index <=20; index++) {
   if(index ==5){
    // console.log(`Detected So pura loop chor k nikal lo ab`);
    // break;
    continue;
    
   }


    console.log(`Value of i is ${index}`);
    
}