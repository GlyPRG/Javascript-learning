let name = "Pasolini";
let email = "puttanaromanesca@outlook.com";
let age = 69;
let status = false;

document.getElementById("name").textContent = `Your name is ${name}.`;
document.getElementById("email").textContent = `Your email is ${email}`;
if(status){
  document.getElementById("status").textContent = `You are alive.`;
}else{
  document.getElementById("status").textContent = `You are dead.`;
}
document.getElementById("age").textContent = `You are ${age} years old.`
