const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }  
  if(arr.length===0){
    return arr;
  }
  let transformArr = arr.slice()

  for(let i=0; i<transformArr.length;i++){
    switch (transformArr[i]){
      case "--double-next":
        if(transformArr[i+1]){
          transformArr[i]=transformArr[i+1]
        }else{
          transformArr.splice(i, 1)
        }
        break;
      case "--double-prev":
        if(transformArr[i-1]){
        transformArr[i]=transformArr[i-1]
      }else{
        transformArr.splice(i, 1)
      }
        break;
      case "--discard-prev":
        if(transformArr[i-1]){
          delete transformArr[i-1]
      }
        transformArr.splice(i, 1)
      
        break;
      case "--discard-next":
        if(transformArr[i+1]){
          delete transformArr[i+1]
        }
          transformArr.splice(i, 1)
        break;
        default:
          break;
    }
  } 

   for(let i=0; i<transformArr.length;i++){
    if(!transformArr[i]){
      transformArr.splice(i, 1)
    }
  }
  return transformArr
}

module.exports = {
  transform
};
