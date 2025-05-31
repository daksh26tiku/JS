const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
//concat returns a new array with the concatenated elements
// console.log(allHeros);

//spread operator(glass)
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//infinity is the depth
console.log(real_another_array);

//helpful while Data scraping

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//creates an array 
console.log(Array.from({name: "hitesh"})) // interesting(does not give an array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
console.log(Array.of(marvel_heros,dc_heros));
