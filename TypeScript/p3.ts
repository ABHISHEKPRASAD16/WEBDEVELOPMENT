class Greeter{
    greeting: string;
    abhishek: string;
    constructor(message: string) {
        this.greeting = message;
        this.abhishek = "I AM ABHISHEK..!";
        alert(this.abhishek)
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");

/*document.write(greeter.greet());*/

console.log(greeter.greet());