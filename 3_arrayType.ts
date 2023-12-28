// assign hole array with string type
let ar:string[] = ["a","v","x","s"];

// assign type particular index
let random:[string,number,string] = ["a",2,"fs"]
// random[0] = 2 // Give me error

// any type allowed
let a:any[] = ["a",2,"v"]
a[0] = 2

// In this contain only string or number
let c:(string | number)[] = [1,"a","fs",1,2]

