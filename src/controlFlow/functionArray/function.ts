// 1. Create a named function to divide two numbers.
function divide(a: number, b: number): number {
    return a/b;
}
console.log("Divide:", divide(10,5));

// 2. Create a named function to multiply two numbers.
function multiply(a: number, b:number): number {
    return a*b;
}
console.log("Multiply:", multiply(10,5));

//  3. Create a named function to find modulus of two numbers.

function modulus(a: number, b: number): number {
    return a % b;
}
console.log("Modulus:", modulus(10,3));

// Arrow function:

const greet = (name: string): string => {
    return "Hello, " + name;
}
console.log(greet("Savi"));

//Anonymous functions

// 1. Create an anonymous function to subtract two numbers.
const subtract = function(a: number, b: number): number {
    return a - b;
}
console.log("Subtract:", subtract(10,5));

// 2. Create a named function to greet user in the morning.

function greetMorning(name: string): string {
    return "Good Morning, " + name;
}
console.log(greetMorning("Savi"));

// Default parameter functions:

// Create a named function with default role as Engineer.
function setRole(name: string = "Engineer"): string {
    return "Role, " + name;

}
console.log(setRole());

//Optional parameter functions:

function buildAddress(city: string, state?: string): string {
    return state ? `${city}, ${state}` : city;
}
console.log(buildAddress("Chennai"));
console.log(buildAddress("Chennai", "Tamil Nadu"));


//Rest-parameter functions:

function SmAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);

}console.log(SmAll(1,2,3,4));
console.log(SmAll(10,20,30,40));

//Recursive functions:

function factorial(n: number): number{
if (n===0) return 1;
return n * factorial(n-1);
}
console.log(factorial(5));
console.log(factorial(3));

