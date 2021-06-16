const get = (key, defaultData) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data === null ? defaultData : data;
};

const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// const clear = () => {
//   localStorage.clear();
// };

const objectExport = {
  get: get,
  set: set,
  // clear: clear,
};
export default objectExport;
