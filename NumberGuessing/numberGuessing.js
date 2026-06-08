const number = Math.floor(Math.random() * 100);
let ans = -1;
let hint = document.getElementById("hint");
let submit = document.getElementById("submit");
let attempts = 0;

submit.onclick = function(){

  ans = Number(document.getElementById("ans").value);

  if(ans < number){
  hint.textContent = `Bigger`;
  }else if(ans > number){
    hint.textContent = `Smaller`;
  }else if(ans == number){
  hint.textContent = `Correct.`;
  window.alert("You guessed right.");
  submit.remove();
  }

}

