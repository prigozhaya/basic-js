const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsStat = {};
  for (let i = 0; i < domains.length; i++) {
    let dnss = domains[i].split(".");
    for (let j = dnss.length - 1; j >= 0; j--) {
      let dom = dnss.slice(j).reverse().join(".");

      if (`.${dom}` in domainsStat) {
        domainsStat[`.${dom}`] = domainsStat[`.${dom}`] + 1;
      } else {
        domainsStat[`.${dom}`] = 1;
      }
    }
  }
  return domainsStat;
}

module.exports = {
  getDNSStats
};
