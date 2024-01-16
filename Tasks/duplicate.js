// Return an array without duplicates
'use strict';

const duplicate = (valueToRepeat, timesToRepeat) => {
  if (timesToRepeat <= 0) {
    return [];
  } 
  const duplicates = [];
  for (let i = 0; i < timesToRepeat; i++) {
    duplicates[i] = valueToRepeat;
  }
  return duplicates;
};

module.exports = duplicate;
