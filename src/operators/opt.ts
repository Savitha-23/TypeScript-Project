//Arithmetic Operators
let a: number = 10;
let b: number = 5;
console.log(a +  b);
console.log(a -  b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


//Assignment Operators

let num: number = 20;
num += 10; // num = num + 10
console.log(num);
num -= 5;
console.log(num);
num *= 3;
console.log(num);
num /= 2;
console.log(num);
num %= 4;
console.log(num);


//Comparison Operators
let A: number = 20;
let B: number = 15;

console.log(A == B);
console.log(A != B);
console.log(A > B);
console.log(A < B);
console.log(A >= B);
console.log(A <= B);

//Logical Operators

let age: number = 33;
let hasID: boolean = true;
console.log(age >= 20 && hasID);
console.log(age >= 35 || hasID);
console.log(!hasID);

// Increment & Decrement Operators


let count: number = 10;
console.log(count++);
console.log(count);

console.log(++count);
console.log(--count);
console.log(count);


// Ternary Operator

// Syntax: condition ? valueIfTrue : valueIfFalse

let marks: number = 80;
let result = (marks >= 90) ? "Agrade Pass" : "Bgrade Fail";
console.log(result);
