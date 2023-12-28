// number, string, boolean, array ..

let num1:number = 10;
console.log(num1);

let num2:number = 10.5;
console.log(num2);

let user:string = "Hello";
console.log(user);

let isTrue:boolean = true
console.log(isTrue);

function add(a:number, b: number) {
    // console.log(a+b);
    return a+b;
}

let c:number  = add(5,6);
console.log("Add ", c);


// Type Inference
// when we have first time assign value that time not define type
let num3 = 5
console.log(num3);

let data; // default type is any


