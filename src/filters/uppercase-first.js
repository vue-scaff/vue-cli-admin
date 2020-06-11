/**
 * Upper case first char
 * @param {String} string
 */
export default string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
