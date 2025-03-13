const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.map ( (num) => {return num+10})
console.log(newNum);

//map and filter chaining

const newNums = myNum
                    .map((num) => num *10)
                     .map((num)=>num+2)
                     .map((num)=>num-3)
                     .filter((num) => num >=40)

console.log(newNums)

// Reduce   

const myArray = [1,2,3]

// regular function

// const myTotal = myArray.reduce(function(accumulator , currentvalue){
//    console.log(`acc : ${accumulator} and currentval " ${currentvalue}`);
//    return accumulator + currentvalue 
// },0 )

// arrow fucntion
const myTotal = myArray.reduce((accumulator ,currentvalue)=>(accumulator + currentvalue ),0)

console.log("sum of array is : " + myTotal);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "Data Science Course",
        price : 699
    },
    {
        itemName : "Python Course",
        price : 5999
    },
    {
        itemName : "java Course",
        price : 999
    },
]

const pricetopay = shoppingCart.reduce((variable , item) => variable + item.price ,0); 
console.log(pricetopay);
