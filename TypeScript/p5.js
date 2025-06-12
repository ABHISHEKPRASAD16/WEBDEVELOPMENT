var Employee = /** @class */ (function () {
    function Employee(name, age, department) {
        this.name1 = name;
        this.age1 = age;
        this.department = department;
    }
    Employee.prototype.Display = function () {
        return this.name1 + "" + this.age1 + " " + this.department;
    };
    return Employee;
}());
var emp = new Employee("TYPESCRIPT", 20, "ANGULAR");
console.log(emp.Display());
