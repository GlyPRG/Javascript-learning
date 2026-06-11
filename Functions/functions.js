// arrow function
document.getElementById("submitGreeting").onclick = function(){
  const greet = (name, greeting) => `${greeting}, ${name}`;
  window.alert(greet(document.getElementById("name").value, document.getElementById("greeting").value));
};

// ==============================================================================

// map and filter, no loops allowed
/*
Write a function evenSquares(arr) that takes an array of numbers,
keeps only the even ones,
and returns their squares.
*/
function evenSquares(arr){
  const even = arr.filter((number) => number % 2 == 0);
  const squares = even.map((number) => number ** 2);
  return squares;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenSquares(arr));

// ==============================================================================

//Closures as Private state

/*Write a function makeCounter(start = 0)
 that returns an object with three methods: increment(), decrement(), and value().
 The counter state must live in a closure — no class, no this.*/

function makeCounter(start = 0) {
  let count = start;
  return{
    increment: () => count++,
    decrement: () => count--,
    value: () => count 
  };
}

// ==============================================================================

/* Write a function multiply(a) that returns a function which multiplies its argument by a.
Then create triple and quadruple using multiply. */

const multiply = a => b => a * b;

const triple = multiply(3);
const quadruple = multiply(4);

console.log(triple(5));
console.log(quadruple(5));