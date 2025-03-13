const  score = 400
console.log(score);


const balance = new Number(100.91)
console.log(balance)
console.log(typeof balance)

const newstring = balance.toString()
console.log(newstring);
console.log(typeof newstring)

console.log(balance.toFixed());

const otherNumber1 = 23.91543
const otherNumber2 = 123.86543
const otherNumber3 = 1123.86543
console.log(otherNumber1.toPrecision(2));
console.log(otherNumber2.toPrecision(3));
console.log(otherNumber3.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,2,1,6,14));
console.log(Math.max(45,12,62,36));

//to generate random value between 0 and 1
console.log(Math.random());

//to generate random value between 1 and 10
console.log((Math.random()*10)+1);

//to generate random  whole num between 10 and 100
console.log(Math.round((Math.random()*100)+10));

const min = 40
const max = 60

console.log(Math.round((Math.random() * (max - min+1)) + min));
