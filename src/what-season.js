const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  dateVariable = new Date();

  if(!isNaN(Date.parse(new Date(dateVariable))) && dateVariable !== 'Invalid Date'&&date instanceof Date && date && Object.prototype.toString.call(date) === "[object Date]"&& !isNaN(date)){
  let season = date.getMonth()<2? 'winter': date.getMonth()<5?'spring': date.getMonth()<8? 'summer': date.getMonth()<11?'autumn': 'winter'
  return season
  }else if(dateVariable<0){
    throw new Error('Invalid date!');
  }else{
    throw new Error('Invalid date!');

  }
  
}

module.exports = {
  getSeason
};
