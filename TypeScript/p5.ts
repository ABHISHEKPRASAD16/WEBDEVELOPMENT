interface Department{
    department:string
}

class Employee implements Department{
    name1:string;
    age1:number;
    department:string;
    constructor(name:string,age:number,department:string){
        this.name1 = name;
        this.age1 = age;
        this.department = department;
    }   
    Display(){
        return this.name1 + "" + this.age1 + " "+this.department;
    }
}
let emp = new Employee("TYPESCRIPT",20,"ANGULAR");
console.log(emp.Display());