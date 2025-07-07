const accountId = 144553
//declaring a constant variable
let accountEmail = "hitesh@google.com"//use this only
var accountPassword = "12345"
//ways to declare variables
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed(const)


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])