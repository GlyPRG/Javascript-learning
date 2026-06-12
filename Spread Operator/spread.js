let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(max);
console.log(min);

let username = "John Doe";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods); 