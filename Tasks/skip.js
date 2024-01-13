// Return an remove without listed values
'use strict'

const skip = (array, ...elementsToRemove) => {
  const result = [];
  const index = 0;
  for (const value of array) {
    for (const elementToRemove of elementsToRemove) {
      if (value === elementToRemove) {
        array.splice(index, 1);
      }
    }
    index++;
  }
  return array;
};

module.exports = skip;
