// Filter array by type name
'use strict';

const filter = (array, typeOfElement) => {
  const removed = [];
  for (const element of array) {
    const index = array.indexOf(element);
      if (typeof array[index] !== typeOfElement) {
    removed.unshift(index);
    }
  }
  for (const index of removed) array.splice(index, 1);
  return array;
};

module.exports = filter;
