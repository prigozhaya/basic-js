const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  link:[],
  getLength() {
return this.link.length
  },
  addLink(value) {
    this.link.push(value)
    return this
  },
  removeLink(position) {
    if(position > this.link.length || position<1 || typeof position !=="number"){
      this.link=[];
    throw new Error('You can\'t remove incorrect link!');
    }

    this.link.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.link=this.link.reverse();
    return this
  },
  finishChain() {
    let chain=this.link.slice();
    this.link=[];
    let chainStr=''
    for(let i in chain){
      chainStr=chainStr+`( ${chain[i]} )~~`
    }
    return chainStr.slice(0,chainStr.length-2)
  }
};

module.exports = {
  chainMaker
};
