const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let strSeparator = typeof options["separator"] !== "undefined" ? options.separator : "+";
  let repeatCount = typeof options["repeatTimes"] !== "undefined" ? options.repeatTimes : 1;
  let addStrRepeatCount = typeof options["additionRepeatTimes"] !== "undefined" ? options.additionRepeatTimes : typeof options["additionRepeatTimes"] === "undefined" && typeof options["addition"] !== "undefined"?1:0;
  let addStr = typeof options["addition"] !== "undefined" ? options.addition : "";
  let addStrSeparator = typeof options["additionSeparator"] !== "undefined" ? options.additionSeparator : "|";
  
  let addStrResult = addStr
  for (let i = 1; i < addStrRepeatCount; i++) {
    addStrResult = addStrResult + addStrSeparator + addStr;
  }

  let result = str+addStrResult;
  for (let i = 1; i < repeatCount; i++) {
    result = result + strSeparator + str+addStrResult;
  }
  return result;
}

module.exports = {
  repeater
};
