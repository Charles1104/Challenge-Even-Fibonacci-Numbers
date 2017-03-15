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
  else{
    while (next <= maxFibValue){
      prev = curr;
      curr = next;
      next = prev + curr;

      if (curr % 2 === 0){
        sum += curr;
      }
    }

  }
  return sum;
}


// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};