console.log("welcome to TS...!");
let a :number;
a=10;
let b :number=20;
let c=a+b;
console.log(c);

let kiran:string;
kiran="this is static value";

console.log(kiran);

let gokul:string;
gokul =  "this is const value"

console.log(gokul);

let decimal: number = 6;
console.log("Decimal Value is:"+ decimal);

let hex: number = 0xf00d;
console.log("Hex value is:"+ hex);

let binary:number = 0b1010;
console.log("Binary value is :"+ binary)

let octal:number = 0o744;
console.log("Octal value is :"+ octal);

let color: string = "blue";
console.log("color value is color :"+ color)

color = "blue";
console.log("color value is color :"+ color)

let fullName:String = "Punith"
console.log("Full name value is :"+ fullName);

let age: number = 37;
console.log("age is:"+ age);

let sentence1: string = "Hello my name is" + fullName + "./n/n" +
 "I'll be" + (age + 1) + "years old next month.";
 console.log(sentence1)


 let list: number[] = [1,2,3];
 console.log("List ARRAY VALue is:"+list);
 //the second way uses a generic array type,Array<DataType>:

 let list1:Array<number> = [1,2,3];
 console.log("List1 array value is:" +list1)


 let unionVariable: string|number;
 unionVariable = 200;
 console.log("unionVariable value is:"+unionVariable);
 unionVariable = "Typescript 1.4 gives program the ability to combine one or more data or one or more datatype"
 console.log("unionVariable value is:"+unionVariable)