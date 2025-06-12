function Display(num1, num2) {
    /* console.log("Num1 value is:",num1)
    console.log("Num2 value is:",num2)
    
     document.getElementById("res").innerHTML += num1 +num2;*/
    this.number1 = num1;
    this.number2 = num2;
    document.getElementById("res").innerHTML += num1 + num2;
}
//Display(20,30)
var displayObject = new Display(50, 100);
console.log(displayObject.number1);
console.log(displayObject.number2);
Display.prototype.result = "Hello TypeScript";
console.log(displayObject.result);
