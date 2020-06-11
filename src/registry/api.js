export default ({ host }, replace) => {
  return {
    observe: `${host}/observe`,
    mock: replace(`${host}/home/mock/{a}/{b}/to/{c}`)
  };
};
