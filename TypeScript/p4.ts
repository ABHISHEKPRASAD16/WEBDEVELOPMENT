//Interface and Object Example
interface EmpDetails{
    firstName:string,
    lastName:string,
    sayHi:() => string
}

let EmpDetails1:EmpDetails = {
    firstName: "TYPESCRIPT",
    lastName:"ANGULAR",
    sayHi:():string  =>  {return `WELCOME TO TYPESCRIPT` }
}

console.log(EmpDetails1.firstName);
console.log(EmpDetails1.lastName);
console.log(EmpDetails1.sayHi())

//Interface Inheritance

interface person {
    age:number;
}
interface Techie extends person {
    expert:string;
}

let TechiePerson:Techie = {age:30,expert:"TYPESCRIPT"};
console.log("Techie Age is"+ TechiePerson.age + "and Techie Expert is:"+TechiePerson.expert);