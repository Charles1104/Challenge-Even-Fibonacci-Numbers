/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
  var prev = 0;
  var curr = 1;
  var next = 1;

  if (maxFibValue <= 0){
    return undefined;
  }

  while (next <= maxFibValue){
    prev = curr;
    curr = next;
    next = prev + curr;

    if (curr % 2 === 0){
      sum += curr;
    }
  }
  return sum;
}


// bonus round
function _highestFibonacciNumber (maxFibValue){

  var sum = 0;
  var prev = 0;
  var curr = 1;
  var next = 1;

  if (maxFibValue <= 0){
    return undefined;
  } else{
      while (next <= maxFibValue){
      prev = curr;
      curr = next;
      next = prev + curr;

      if (curr % 2 === 0){
        sum += curr;
      }
    }

  }
  return curr;


}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};


function _sumFibs(maxFibValue) {

  var Fibs = [0,1];
  var Total = 0;

  while (Fibs[Fibs.length-1] < maxFibValue){
      var sum = Fibs[Fibs.length-1] + Fibs[Fibs.length-2];
      Fibs.push(sum);
  }

  for (var i=0; i < Fibs.length; i++){
    if (Fibs[i]%2 === 0){
      Total += Fibs[i];
    }
  }

return Total;

}