const name ="hitesh"
const repocount = 50

console.log(`Hello my name is ${name} and my rep count is ${repocount} `)

// declare in other way

const gameName = new String('hitessh-hs-ram')
console.log(gameName[0]);

//access prototype
console.log(gameName.__proto__);

//method of string

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString  = gameName.slice(-8,4)
console.log(gameName);

const newStringOne = "   sadashish    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sadashish.com/sadashish%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('kumar'));

//convert a string based on specific symbol to an array
console.log(gameName.split('-'));

