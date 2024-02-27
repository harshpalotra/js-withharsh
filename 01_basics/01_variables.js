const accountId = 12364
let accountEmail = "palotraharsh@gmail.com"
var accountpassword =   "1234"
accountCity = "jaipur"

//accountId = 2
accountEmail = "haha@gmail.com"
accountpassword = "212122"
accountCity = "Indore"
console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountpassword,accountCity]);