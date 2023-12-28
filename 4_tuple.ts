// Bad Practise
// let role:[string,string,number] = ["admin","manages"] // throw error because number type value not assign
// role.push(2) 

// Good
let role:[string,string,number?] = ["admin","manages"] // throw error because number type value not assign
role.push(2) 