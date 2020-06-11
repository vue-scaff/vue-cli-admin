export default (data, callback) => {
  return Object.keys(data).map(key => callback(data[key], key));
};
