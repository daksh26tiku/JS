const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
console.log(user);

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);
// prints an empty object as it has no global context
//however, in browser it prints the window object(global object of the browser)

function fun() {
    console.log(this);
}
fun()
// printing this  inside a function prints the global object of node environment

function chai(){
    let username = "hitesh"
    console.log(this);
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));//7

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {username: "hitesh"}
// this will not work as to returna object we need to wrap it in parentheses

// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3, 4))

// // const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()