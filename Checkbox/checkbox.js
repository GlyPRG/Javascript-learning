const checkbox = document.getElementById("checkbox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const radios = document.getElementsByName("payment");

submit.onclick = function(){

  result.textContent = "";

  if((radios[0].checked || radios[1].checked || radios[2].checked)){
    if(checkbox.checked){
    result.append('You have selected the checkbox and ');
  }else{
    result.append('You have not selected the checkbox and ');
  }
  for(let i = 0 ; i < radios.length; i++){
    if(radios[i].checked){
      result.append(`you have selected payment method ${radios[i].id}`);
    }
  }
  }else{
    result.textContent = "Please select a payment method.";
  }
}