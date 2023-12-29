// both type allowed
let data : number | string = 10
data = "abc"


function combine(a:number|string,b:number|string) {
    if (typeof a == "number" && typeof b == "number") {
        console.log(a+b);
    }
    console.log(a.toString()+b.toString());
}

combine(2,3)
combine("2","3")


// for any
let data2 : any = 10