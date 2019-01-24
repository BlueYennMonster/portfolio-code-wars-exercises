function listSquared(m, n) {
//     // your code
//     // iterate from m to n
//     // find all divisors of a
//     // square each divisor
//     // add divisors square values
//     // check if result is square number
//     // if yes, add i and total to array
//     // if no, iterate a

let totalDivisors = [];


    
for(let a = m; a <= n; a++){ 

  let divisors = [];

  for(let b = 1; b <= a; b++){
    if (a % b === 0){
      divisors.push(b*b);
    }
  }


  let divisorsTotal = divisors.reduce((a, b) => a + b, 0)
  let totalSquareRoot = Math.sqrt(divisorsTotal);
  if(totalSquareRoot % 1 === 0){
    totalDivisors.push([a, divisorsTotal]);
  };


}

console.log(totalDivisors);

};

listSquared(1, 250);
