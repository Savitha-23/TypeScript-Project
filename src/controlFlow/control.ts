// if Statement:

// let age: number = 25;
// if (age >= 18) {
//     console.log("You are an adult so you can vote.");
// } 


//if...else Statement

// let Age: number = 25;
// if (Age < 18) {
//     console.log("You are an adult so you can vote.");
// } else {
//     console.log("You are not an adult so you cannot vote.");

// }

//if...else if...else Statement

// syntax
// if (condition1) {
// } else if (condition2) {
// } else {
// }

// let marks: number = 30;
// if (marks >= 90) {
//     console.log("You got A Bucket WOWWWW.");
// } else if (marks >= 65) {
//     console.log("You got a B Bucket GOOOD.");
// } else if (marks >= 45) {
//     console.log("You got a C Bucket NOT BAD.");
// } else {
//     console.log("No Bucket for you.");
// }

// switch Statement

// syntax
// switch (expression) {
// case value1:
// break;
// case value2:
// break;
// default:

// }

// let day: number = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number.");
// }   

// Ternary Operator

// syntax
// condition ? expressionIfTrue : expressionIfFalse;

// let age: number = 20;
// let canVote: string = age <= 17 ? "You can vote." : "You cannot vote.";
// console.log(canVote);

//nestes conditional statements


// Syntax

// if (condition1) {
// // Code executes if condition1 is true
// if (condition2) {
// // Code executes if both condition1 and condition2 are true
// } else {
// // Executes if condition1 true but condition2 false
// }
// } else {
// // Executes if condition1 false
// }


let username = "admin";
let PWD = "2322";
if (username === "admin") {
    if (PWD === "2322") {
        console.log("Login Successfull");
    } else {
        console.log("Incorrect Password");
    }
} else {
    console.log("Username not found");
}
    
