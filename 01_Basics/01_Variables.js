const account_Id=2156
let account_email="employee@google.com"
let account_Password="124444"
account_City="Pune"// it is worst way of variable declaration
let account_State;//output is undefined 

console.table([account_Id,account_Password,account_email,account_City,account_State]);

// account_Id=2 // const is not allowed to change value

account_email="google@gmail.com"
account_Password=12
account_City="dubai"
/* 
prefer not use var
because of isue in block scope and functional scope
*/

console.table([account_Id,account_Password,account_email,account_City,account_State]);