document.getElementById("pi").textContent = `The value of pi is ${Math.PI}`;
document.getElementById("eulers").textContent = `The value of Euler's number is ${Math.E}`;

let x = -3.99;
let y = 2;
let z;

document.getElementById("x").textContent = `The value of x is ${x}`
document.getElementById("y").textContent = `The value of y is ${y}`

z = Math.round(x);
document.getElementById("zRound").textContent = `The value of z is ${z}`;

z = Math.floor(x);
document.getElementById("zFloor").textContent = `The value of z is ${z}`;

z = Math.ceil(x);
document.getElementById("zCeil").textContent = `The value of z is ${z}`;

z = Math.trunc(x);
document.getElementById("zTrunc").textContent = `The value of z is ${z}`;

z = Math.pow(x, y);
document.getElementById("zPow").textContent = `The value of z is ${z}`;

z = Math.sqrt(x);
document.getElementById("zSqrt").textContent = `The value of z is ${z}`;

z = Math.log(x);
document.getElementById("zLog").textContent = `The value of z is ${z}`;

z = Math.sin(x);
document.getElementById("zSin").textContent = `The value of z is ${z}`;

z = Math.cos(x);
document.getElementById("zCos").textContent = `The value of z is ${z}`;

z = Math.tan(x);
document.getElementById("zTan").textContent = `The value of z is ${z}`;

z = Math.abs(x);
document.getElementById("zAbs").textContent = `The value of z is ${z}`;

z = Math.sign(x);
document.getElementById("zSign").textContent = `The value of z is ${z}`;

z = Math.max(x, y, z);
document.getElementById("max").textContent = `The biggest number between x, y and z is ${z}`;

z = Math.min(x, y, z);
document.getElementById("min").textContent = `The smallest number between x, y and z is ${z}`;