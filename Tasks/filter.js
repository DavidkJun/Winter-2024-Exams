// Filter array by type name
'use strict';

const filter = (array, typeOfElement) => {
  const filteredArray = [];
  for (const element of array) {
    const index = array.indexOf(element);
    if (typeof array[index] === typeOfElement) {
      filteredArray.push(array[index]);
    }
  }
  return filteredArray;
};

module.exports = filter;
