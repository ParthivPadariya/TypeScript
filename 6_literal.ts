// assign paticular value

// we can assign only abc or 123
let a: "abc"|123 = 123
console.log(a);


// alias
// reuse type
// Bad
let b : string | number | undefined = 10;
let c : string | number | undefined = 10;
let d : string | number | undefined = undefined;

// Good
type varTye = string | number | undefined;
let e : varTye = 20