// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("05-31-2025")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);// this is the milliseconds from the reference date till now
// console.log(myCreatedDate.getTime());//this is the milliseconds from the reference date till myCreatedDate
// console.log(Math.floor(Date.now()/1000));//in seconds(floored)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time`)

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))