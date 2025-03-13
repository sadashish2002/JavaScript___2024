let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON()); 
console.log(myDate.toDateString()); 
console.log(typeof myDate);

let myCreateDate = new Date();
console.log(myCreateDate.toLocaleString()); //28/1/2025, 4:33:43 pm
console.log(myCreateDate.toLocaleDateString());  //28/1/2025
console.log(myCreateDate.toLocaleTimeString());  //4:33:43 pm

let CreatedDate = new Date(2025,0,29);
let CreatedDate1 = new Date("2025-01-29");
let CreatedDate2 = new Date("02-21-2029");
console.log(CreatedDate1.toLocaleString()); //29/1/2025, 5:30:00 am
console.log(CreatedDate2.toLocaleString()); //21/2/2029, 12:00:00 am
console.log(CreatedDate.toDateString()); //Wed Jan 29 2025

let myTimeStamp = Date.now()
console.log(myTimeStamp); //give output in millisecond from 1st jan 1970

console.log(CreatedDate.getTime());

//convert millisecond to second
console.log(Math.floor(Date.now()/1000));

//find month , year , date
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getMinutes());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone : '',
    day:'numeric'

})


