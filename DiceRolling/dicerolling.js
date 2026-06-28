function rollDices(){

  const numOfDice = document.getElementById("input").value;
  const diceResult = document.getElementById("result");
  const diceImages = document.getElementById("dices");
  const values = [];
  const images = [];

  for(let i = 0; i < numOfDice; i++){
    const rand = Math.floor(Math.random() * 6) + 1;
    //console.log(values);
    values.push(rand);
    images.push(`<img src="assets/${rand}.png" alt= "Dice ${rand}">`);
  }

  //console.log(values)
  diceResult.textContent = `dice: ${values.join(`, `)}`;
  diceImages.innerHTML = images.join('');
}