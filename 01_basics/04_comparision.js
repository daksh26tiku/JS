// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);//true
// console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

//for equality check null is not converted to 0
//for comparison null is converted to 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//false for all three cases
// === (strict equality) checks both value and type

console.log("2" === 2);//false