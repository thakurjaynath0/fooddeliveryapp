/* eslint-disable no-restricted-syntax */
const pick = (obj, filterArray) => {
  const resultObj = {};

  for (const prop in obj) {
    if (filterArray.includes(prop)) {
      resultObj[prop] = obj[prop];
    }
  }

  return resultObj;
};

module.exports = pick;
