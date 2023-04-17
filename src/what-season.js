const { NotImplementedError } = require("../extensions/index.js");

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
  if (!date) {
    return "Unable to determine the time of year!";
  }

  try {
    date.toLocaleString();
  } catch (e) {
    if (e) throw new Error("Invalid date!");
  }

  if (date && date instanceof Date) {
    let season =
      date.getMonth() < 2
        ? "winter"
        : date.getMonth() < 5
        ? "spring"
        : date.getMonth() < 8
        ? "summer"
        : date.getMonth() < 11
        ? "autumn"
        : "winter";
    return season;
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
