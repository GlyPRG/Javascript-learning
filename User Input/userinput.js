let username;

document.getElementById("submitUsername").onclick = function(){
  username = document.getElementById("username").value;
  console.log(username);
  document.getElementById("welcomeSign").textContent = `Hello ${username}`;
}



