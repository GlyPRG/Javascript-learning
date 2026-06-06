const PI = 3.14159;
let radius;
let circumference;

// PI = 42;

document.getElementById("submit").onclick = function(){
  radius = document.getElementById("input").value;
  circumference = 2 * PI * radius;
  document.getElementById("ans").textContent = `Your circle's circumference is ${circumference}cm.`;
}