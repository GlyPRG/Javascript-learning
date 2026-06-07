let count = 0;
document.getElementById("number").textContent = 0;

document.getElementById("increase").onclick = function(){
  count++;
  document.getElementById("number").textContent = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("number").textContent = 0;
  }

document.getElementById("decrease").onclick = function(){
  count--;
  document.getElementById("number").textContent = count;
}
  

