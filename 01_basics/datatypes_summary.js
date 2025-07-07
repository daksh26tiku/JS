//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100//number
const scoreValue = 100.3//number

//js is dynamically typed language

const isLoggedIn = false//boolean
const outsideTemp = null//null
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
//n denotes BigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

//you can treat functions as variables in js
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);//bigint
console.log(typeof outsideTemp);//null is an object
console.log(typeof anotherId);//symbol
console.log(typeof myFunction);//function

// https://262.ecma-international.org/5.1/#sec-11.4.3