let num1 = 10; // number .1
let num2 = 2.5; // number 1.


console.log(num1.toString() + num2); // .1
console.log(typeof num1); // .1

//num1 = num1.toString() // .1  To convert Number in String.

console.log(typeof num1); // .1
console.log(num1.toString(2)); // .1 Return tre Number in binary value.

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------- <br />');

let numero = 10.57959695965969596569569565; // .2 number 

console.log(numero.toFixed(2)); // .2 Change the decimal value of the number to fixed places, but without changing the real value .
console.log(Number.isInteger(numero)); // .2 Return true or false depending on whether the number is interger 

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------- <br />');

let numero1 = 0.70; // number .3 
let numero2 = 0.10; // number .3

numero1 += numero2; // 0.8 .3
numero1 += numero2; // 0.9 .3
numero1 += numero2; // 1.0 .3
numero1 += numero2; // 1.1 .3
numero1 += numero2; // 1.2 .3
numero1 += numero2; // 1.3 .3
numero1 += numero2; // 1.4 .3
numero1 += numero2; // 1.5 .3

numero1 = parseFloat(numero1.toFixed(2)); // Chager number typer. .3

console.log(numero1);
console.log(Number.isInteger(numero1));