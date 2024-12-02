console.log("welcome kishore");

//1, string data type

let fname:string;
fname="deva";

console.log(`Your name: ${fname}`);

// 2, number;

let number1:number=100,number2:number=200;

console.log(number1,number2);

// 3,boolean

let cond1:boolean=true,cond2:boolean=false;

console.log(cond1,cond2);

//4,array
let courses:string[]=["html","css","js","react"];
let courses1:Array<string>=["html","css","js","react"];
console.log(courses,courses1);


let pinCode:number[]=[4100122,234890,410016];
let pinCode1:Array<number>=[4100122,234890,410016];
console.log(pinCode,pinCode1)

//tupple: it allows us to store multiple types of data into array.

let product:[number,string,boolean]=[100,"Mango",true];
console.log(product)

// enum: it create variable with constant values
enum days{sun=501,mon,tue,wed,thru,fri,sat};
let data1=days.sun;
console.log(data1)

// union:it allows us to store multiple values in single variable;

let info:number|string|boolean="deva";
console.log(info)
//any:when we dont know waht atype of data is going to store in variable in that case we use it.

let mix:any="hello";
console.log(mix)





