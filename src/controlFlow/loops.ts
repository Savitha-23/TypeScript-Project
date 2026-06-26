// for loop:
// Syntax:
//for (initialization; condition; update) {

for (let i = 1; i <= 5; i++) {
    console.log("Step:", i);
}

// while loop:
// Syntax:
// while (condition) {
// // Code executes as long as condition is true
// }

let count: number = 1;

while (count <= 5) {
    console.log("Count:", count);
    count++;
}

// do-while loop:
// Syntax:
// do {
// // Code executes at least once and then continues as long as condition is true
// } while (condition); 

let num: number = 1;
do {
    console.log("Number:", num);
    num++;
} while(num <= 5);

// for...of loop:
// Syntax:
// for (const element of iterable) {
// // Code executes for each element in the iterable
// }

const fruits: string[] = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
console.log("Fruit:", fruit);
}

// for...in loop:
// Syntax:
// for (const key in object) {
// // Code executes for each key in the object
// }

let student = {name: "Jolly", age: 18, course: "BBA"}; 
for (let key in student) {
    console.log(key, ":", student[key as keyof typeof student]);
}
