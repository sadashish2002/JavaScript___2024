
const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
const indian_heroes = ["shaktiman","Mr.India"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

console.log(marvel_heros);

// merge two array 
const allHeroes = marvel_heros.concat(dc_heros)
console.log(allHeroes);

//spread operator is use to merge more than 2 aray in one aray

const all_new_heroes = [...marvel_heros,...dc_heros ,...indian_heroes]
console.log(all_new_heroes);

// flat method - it will combine all array of array in single array

const another_array = [1,2,3,[4,5,6],7,[6,7,[5,6]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//convert string to array

console.log(Array.isArray("sadashish"));
console.log(Array.from("sadashish"));
console.log(Array.from({name:"sadashish"}));  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
