/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */

export default (time, label) => {
  if (time === 1) {
    return time + label;
  }
  return time + label + "s";
};
