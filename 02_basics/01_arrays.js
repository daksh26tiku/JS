// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//adds an element at the beginning
// myArr.shift()//removes the first element

// console.log(myArr.includes(9));// checks if the element is present in the array
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()// joins the elements into a string

// console.log(myArr);
// console.log( newArr);//string


// slice, splice

console.log("A ", myArr);//A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//[1, 2]
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
// removes the elements from the array and returns them
console.log("C ", myArr);
console.log(myn2);