// //Arrays:

// let mix: (string | number | boolean)[] = ["Hi", 10, true];
// console.log(mix);

// // Method 1: Using square brackets:

// let numbers: number [] = [10,20,30];
// let fruit: string [] = ["Apple", "Banana", "Cherry"];
// let mixed: (number | string)[] = [1, "two", 3, "four"];
// console.log(numbers);
// console.log(fruit);
// console.log(mixed);

// // Method 2: Using square brackets:

// let fruits: Array<string> = ["Apple", "Banana"];
// // fruits.push("Orange");
// fruits.splice(0,0,"orange");
// console.log(fruits);

//Array Methods:

// // • forEach() – Iteration
// • map() – Transformation
// • filter() – Condition-based filtering
// • reduce() – Accumulation to a single value

// forEach() - iteration Method

// Syntax: 
// array.forEach((value, index, array) => {

// });
    
// Example 1: Basic Iteration:

// let languages = ["TS", "JS", "Python"]; OR
let languages: string[] = ["TS", "JS", "Python"];
languages.forEach(lang => {
    console.log(lang);
    
});

// Example 2: Using Index:

let fruits: string[] = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
fruits.forEach(function(element, index){
    console.log(`${index}, ${element}`);
});

//ForMap() - Transformation Method

// Syntax: 
// array.map(function(value, index, array){})

let numbers: number[] = [1, 2, 3, 4, 5];   
let squaredNumbers = numbers.map(function(element){
    return(element * element);
}); console.log(squaredNumbers);

//for filter() - Condition-based filtering Method

// Syntax: 
// array.filter(function(value, index, array){})

let numb: number[] = [1, 2, 3, 4, 5]; 
let evenNumbers = numb.filter(function(element){
    return(element % 2 === 0);
}); console.log(evenNumbers);

//for reduce() - Accumulation to a single value Method

// Syntax: 
// array.reduce(function(accumulator, currentValue, index, array){})

let num:number[] = [1,2,3,4,5];
let sum = num.reduce(function(accumulator, currentValue){
    return(accumulator + currentValue);

}); console.log(sum);
