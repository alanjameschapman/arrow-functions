// Rest Parameter Syntax

// Regular function call
// const sumAll = (a, b, c) => a + b + c;
// let sum = sumAll(1, 2, 3);
// console.log("Sum:", sum);

// // Extra arguments are ignored
// let sum2 = sumAll(1, 2, 3, 4, 5, 6);
// console.log("Sum2:", sum2);

// // Function using ...rest
// const sumRest = (a, b, c, ...rest) => {
//     let sum = a + b + c;
//     for (let i of rest) {
//         sum += i;
//     }
//     return sum;
// }
// let sum3 = sumRest(1, 2, 3, 4, 5, 6);
// console.log("Sum3:", sum3);


// Destructuring

// Destructuring arrays
let ages = [20, 22, 25];
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log(john, mary, joe);

let [john2, mary2, joe2] = ages;
console.log(john2, mary2, joe2);

// Destructuring objects
let jobs = {
    john3: "teacher",
    mary3: "designer",
    joe3: "developer"
};

let {john3, mary3, joe3} = jobs;
console.log(john3, mary3, joe3);

// Destructuring subsets

let languages = ["JavaScript", "Python", "Java", "C++", "C#"];
let [john4, mary4, joe4] = languages;
console.log(john4, mary4, joe4);

let [john5, , joe5] = languages;
console.log(john5, joe5);

let languages2 = {
    john6: "JavaScript",
    mary6: "Python",
    joe6: "Java"
};

let {john6, joe6} = languages2;
console.log(john6, joe6);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite , secondFavourite, ...others] = fruits;
console.log(favourite, secondFavourite, others);

let favouriteFoods = {
    john7: "pizza",
    mary7: "hamburger",
    joe7: "pasta",
    tom7: "sushi"
};

let {john7, mary7, ...rest} = favouriteFoods;
console.log(john7, mary7, rest);
