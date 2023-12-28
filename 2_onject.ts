// Object type

// Bad 
// const person:object = {
//     name:"Pathiv",
//     age:27    
// }
// console.log(person.name); // Error because object type assign but not contain any value 


// Good
// Hear we Have Define every time object type
const person:{name:string,age:number} = {
    name:"Pathiv",
    age:27    
}
console.log(person.name);

const person2:{name:string,age:number} = {
    name:"Pathiv1",
    age:29    
}
console.log(person2.name);

// reduce
// Hear use semicolone
type objType = {
    name:string;
    age:number;
}

const user2 : objType = {
    name:"user",
    age:20
}
console.log(user2.name);    
