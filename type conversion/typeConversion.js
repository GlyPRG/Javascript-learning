let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = Boolean(y);
z = String(z);

console.log(x, typeof x, y, typeof y, z, typeof z);