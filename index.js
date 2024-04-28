/**
 *  Formats big numbers to a human readable format upto Quadrillion
 *  to a decimal place amount of your choice
 *
 *
 *  @param {number} num - The number value to format
 *  @param {number} [decimalPlaces=0] - The number of max decimal places. Defaluts to 0 if not provided
 *  @return {string} The formated form of the number as a string
 *
 * */
function formatToReadable(num, decimalPlaces = 0) {
  if (isNaN(num)) throw "num should be a type number";
  if (isNaN(num)) throw "decimalPlaces should be a type number";
  if (decimalPlaces < 0 || decimalPlaces > 100)
    throw "decimalPlaces must be between 0 and 100";
  if (num === 0) return 0;

  const positiveNum = Math.abs(num);
  const sign = num / positiveNum;

  if (positiveNum >= 1_000_000_000_000_000) {
    return (
      ((sign * positiveNum) / 1_000_000_000_000_000).toFixed(decimalPlaces) +
      "Qua"
    );
  } else if (positiveNum >= 1_000_000_000_000) {
    return (
      ((sign * positiveNum) / 1_000_000_000_000).toFixed(decimalPlaces) + "T"
    );
  } else if (positiveNum >= 1000000000) {
    return ((sign * positiveNum) / 1_000_000_000).toFixed(decimalPlaces) + "B";
  } else if (positiveNum >= 1000000) {
    return ((sign * positiveNum) / 1_000_000).toFixed(decimalPlaces) + "M";
  } else if (positiveNum >= 1000) {
    return ((sign * positiveNum) / 1_000).toFixed(decimalPlaces) + "K";
  } else {
    return num;
  }
}

module.exports = formatToReadable;
