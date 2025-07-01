const accountId = 101
let accountEmail = "zoi@iimt.com"
var accountPassword = "1234"
accountCity = "Mrt" // not prefered
let accountState;
console.log(typeof accountId, typeof accountEmail, typeof accountCity);


console.log(accountId);
// accountId = 3 //can't assign to const 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log([accountId, accountEmail, accountPassword, accountCity]);
