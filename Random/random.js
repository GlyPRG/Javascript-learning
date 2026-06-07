document.getElementById("randomNumber").textContent = 0;

document.getElementById("roll").onclick = function(){

  let max = Number(document.getElementById("max").value);
  let min = Number(document.getElementById("min").value);

  if(max < min){
  document.getElementById("randomNumber").textContent = "Impossible";
  }else{
    let rand = Math.floor(Math.random() * (max+1 - min)) + min;
    document.getElementById("randomNumber").textContent = rand;
  }

}