const coding = ["js","rb","py","java","cpp"]

coding.forEach( (item) => {
    console.log(item);
    
})

//orf

// for each loop  will not return anything

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// })

// console.log(values);  // undefined

// filter () function will always return some value which satify condition

const myNums = [1,2,3,4,5,6,7,8,9,10]

 const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

    //          or
// when u start scope {} then must write return statement

 const newNum = myNums.filter( (num) => {
   return num > 4
})
console.log(newNum);

//             or
//How to filter using for each loop

const newVal = [] 

myNums.forEach ( (num) => {
    if(num>4){
        newVal.push(num)
    }
})
console.log(newVal);


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

const books = [
    {
     title : 'Book One' , genre:'Fiction',publish: 1981,
     edition:1996 },
    {
     title : 'Book Two' , genre:'Non-Fiction',publish: 1981,
     edition:2004 },
    {
     title : 'Book Three' , genre:'History',publish: 1981,
     edition:2008 },
    {
     title : 'Book Four' , genre:'Non-Fiction',publish: 1981,
     edition:2002 },
    {
     title : 'Book Five' , genre:'Science',publish: 1981,
     edition:2000 },
    {
     title : 'Book Six' , genre:'Fiction',publish: 1981,
     edition:2005 },
    {
     title : 'Book Seven' , genre:'History',publish: 1981,
     edition:1999 },
    {
     title : 'Book Eight' , genre:'Science',publish: 1981,
     edition:2009 },
    {
     title : 'Book Nine' , genre:'Non-Fiction',publish: 1981,
     edition:2001 },
    {
     title : 'Book Ten' , genre:'Fiction',publish: 1981,
     edition:2002 },

]

console.log(books);

// Retrieve some data based on different conditions

books.forEach((item)=>{
    console.log(item.title);
    
})

let userBooks = books.filter((bk) =>bk.genre==='History')
console.log(userBooks);

//annd
userBooks = books.filter( (bk) => {return bk.edition >= 2000  && bk.genre==='History'})
console.log(userBooks);




