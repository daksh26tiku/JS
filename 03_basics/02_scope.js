
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);//error
}

// console.log(username);//error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//can call before declaration because of hoisting

function addone(num){
    return num + 1
}



addTwo(5)//error as cannot call before declaration because function expression is not hoisted
const addTwo = function(num){
    return num + 2
}
