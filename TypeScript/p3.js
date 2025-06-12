var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
        this.abhishek = "I AM ABHISHEK..!";
        alert(this.abhishek);
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
/*document.write(greeter.greet());*/
console.log(greeter.greet());
