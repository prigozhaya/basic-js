const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let k = 0;
  let rle = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      k++;
    } else {
      k++;
      rle.push([k, str[i]]);
      k = 0;
    }
  }
  let arr=[]
  for(let i in rle){
    if(rle[i][0]===1){
      rle[i].splice(0,1);
    }
    arr.push(rle[i].join(''))
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
