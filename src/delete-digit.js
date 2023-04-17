const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=Array.from(String(n))
  console.log(n)
let max=0;
  for(let i in arr){
  arr=Array.from(String(n));
  arr.splice(i,1);
let number= Number(arr.join(''))
max= number>max? number:max;
}
return max
}

module.exports = {
  deleteDigit
};
