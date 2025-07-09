// singleton
// ensures that a class has only one instance 
// and provides a global point of access to that instance
// cannot be made using literals
// can be made using constructor
// Object.create(constructor method)

const mySym = Symbol("key1")

// object literals(way to declare objects)

const JsUser = {
    name: "Hitesh",//keys are tracked by string
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",// add square bracket to use symbols as keys
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(typeof JsUser);
//object
// console.log(JsUser.age)
// console.log(JsUser["email"])
// need to use quotes if using square brackets
//console.log(JsUser.full name) will not work
// console.log(JsUser["full name"])
//need to use square brackets if key has quotes
// console.log(JsUser[mySym])
//only square brackets can be used to access symbols as keys

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) 
// to lock the values of the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);
// will return the function reference
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());